import { Component, OnInit } from '@angular/core';
import { Offer} from '../../modal/offer'
import { HttpClient, HttpResponse,HttpHeaders } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import {NgbModal, ModalDismissReasons, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';



class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })}

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
 
    
  editPersons;
 offer=Offer; 
 dtOptions: DataTables.Settings = {};
 persons:any;
 data:any;
 itemView;
 closeResult:string;
  constructor(private http: HttpClient,private modalService: NgbModal, private modalService2: NgbModal) { }

  ngOnInit():void {
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      //pageLength: 2,
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<any>(
            'http://192.168.1.4:3000/dt',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      },
      columns: [{ data: 'Name' }, { data: 'Phone' }]
    };
    
  }
 
                 
show(event,content){
  console.log(event,content);
  this.editPersons=event;
  this.open2(content);
 


}
edit(){
  console.log(this.editPersons);
 this.http.post('http://localhost:3000/editUser',this.editPersons,{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(result=>console.log(result));
 
}

  
  addOffer(){
 console.log(this.offer);
  }
  onChange(event){
 console.log(event);
  }
  nonActiveOffer(event){
    console.log(event);
  }
  activeOffer(event){
    console.log(event);
  }
  open2(content) { 
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  open(content) {
    this.modalService2.open(content, { windowClass: 'dark-modal' });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
