import { AfterViewInit, Component, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataTableDirective } from 'angular-datatables';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import * as conf from '../../config';
import { catchError, map, tap } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SpeechRecognitionService } from '../../speech-recognition.service';
const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json'
  })
};



@Component({
  selector: 'app-minimalistic',
  templateUrl: './minimalistic.component.html',
  styleUrls: ['./minimalistic.component.css']
})
export class MinimalisticComponent  implements OnInit, AfterViewInit , OnDestroy  {
  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  persons: any;
  closeResult: string;
  min: number;
  max: number;
  dtData:any ={"draw": 13, "columns": [{"data": "id", "name": "", "searchable": true, "orderable": true, "search": {"value": "", "regex": false } }, {"data": "Name", "name": "", "searchable": true, "orderable": true, "search": {"value": "", "regex": false } }, {"data": "Phone", "name": "", "searchable": true, "orderable": true, "search": {"value": "", "regex": false } } ], "order": [{"column": 0, "dir": "asc"} ], "start": 0, "length": 10, "search": {"value": "", "regex": false } };
  //voice start
  showSearchButton: boolean;
  speechData: string;
  //voice end

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  
  constructor(private http: HttpClient,private modalService: NgbModal,private speechRecognitionService: SpeechRecognitionService) { 
      //voice start
      console.log(conf.data.api);
  this.showSearchButton = true;
  this.speechData = "";
  //voice end
   this.http.post<any>(conf.data.api+'/editUser', {
      "Name":"ANJAYxcvcvcv",
      "Phone":"1234567890",
      "id":1
}, httpOptions).subscribe(heroes => {
      this.persons=heroes});
  }
  selectUser:any;
  dd:any;
  saveRec(){
    
    this.http.post<any>(conf.data.api+'/editUser', this.selectUser, httpOptions)
    .subscribe(heroes => {
      this.dd.dismiss('close');
    });
  }
  //voice  start
  ngOnDestroy() {
    $.fn['dataTable'].ext.search.pop();
    this.speechRecognitionService.DestroySpeechObject();
}
activateSpeechSearchMovie(): void {
  this.showSearchButton = false;

  this.speechRecognitionService.record()
      .subscribe(
      //listener
      (value) => {
          this.speechData = value;
          this.dtData.search.value=value;
          this.http.post<any>(conf.data.api+'/dt', this.dtData , httpOptions).subscribe(heroes => {
            this.persons=heroes.data;
          });
            
          console.log(value);
      },
      //errror
      (err) => {
          console.log(err);
          if (err.error == "no-speech") {
              console.log("--restatring service--");
              this.activateSpeechSearchMovie();
          }
      },
      //completion
      () => {
          this.showSearchButton = true;
          console.log("--complete--");
          this.activateSpeechSearchMovie();
      });
}
filterById(): void {
  this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
    console.log(dtInstance)
    dtInstance.draw();
  });
}
//voice end
  open(content,data) {
    this.selectUser=data;
    
   this.dd = this.modalService.open(content);
  }
  openPOP(data){
    console.log(data);
   
    data.Name+='_EDIT';
    this.http.post<any>(conf.data.api+'/editUser', data, httpOptions)
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
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      console.log(settings, data, dataIndex);
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });
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
            conf.data.api+'/dt',
            dataTablesParameters, {}
          ).subscribe(resp => {
            that.persons = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data:resp.data
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

