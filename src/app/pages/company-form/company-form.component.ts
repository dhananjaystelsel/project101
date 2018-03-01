import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  data:any= {};
  constructor() { }

  ngOnInit() {
  }
  formSubmit(){
    console.log(this.data);
  }

}
