import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { catchError, map, tap } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Component({
  selector: 'app-minimalistic',
  templateUrl: './minimalistic.component.html',
  styleUrls: ['./minimalistic.component.css']
})
export class MinimalisticComponent  implements OnInit, AfterViewInit  {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  persons: any;
  closeResult: string;
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  
  constructor(private http: HttpClient,private modalService: NgbModal) { 
   this.http.post<any>('http://localhost:3000/editUser', {
      "Name":"ANJAYxcvcvcv",
      "Phone":"1234567890",
      "id":1
}, httpOptions).subscribe(heroes => {
      this.persons=heroes});
  }
  selectUser:any;
  dd:any;
  saveRec(){
    
    this.http.post<any>('http://localhost:3000/editUser', this.selectUser, httpOptions)
    .subscribe(heroes => {
      this.dd.dismiss('close');
    });
  }
  open(content,data) {
    this.selectUser=data;
    
   this.dd = this.modalService.open(content);
  }
  openPOP(data){
    console.log(data);
   
    data.Name+='_EDIT';
    this.http.post<any>('http://localhost:3000/editUser', data, httpOptions)
    .subscribe(heroes => {
      console.log(heroes);
    });

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
  ngAfterViewInit(): void {}
  ngOnInit(): void {
    const that = this;

    this.dtOptions = {
      pagingType: 'full_numbers',
      //pageLength: 2,
      serverSide: true,
      processing: true,
      columns: [{
        title: 'id',
        data: 'id'
      }, {
        title: 'Name',
        data: 'Name'
      }, {
        title: 'Phone',
        data: 'Phone'
      }],
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<any>(
            'http://192.168.1.4:3000/dt',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: []
            });
          });
      }
    };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log("log",message);
  }

}

