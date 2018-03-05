import { Component } from '@angular/core';
import {NgbPanelChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent  {

  data:any= {};
  constructor() { }

  ngOnInit() {
  }
  formSubmit(){
    console.log(this.data);
  }

}
