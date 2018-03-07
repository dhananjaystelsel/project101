import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupan',
  templateUrl: './coupan.component.html',
  styleUrls: ['./coupan.component.css']
})
export class CoupanComponent implements OnInit {
 coupan:any={};
  constructor() { }

  ngOnInit() {
  }
  addCoupan(){
    console.log(this.coupan);
  }
  resetSearchCoupan(){
    this.coupan={};
  }
}
