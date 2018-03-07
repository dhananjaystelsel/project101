import { Component, OnInit } from '@angular/core';
import { Offer} from '../../modal/offer'

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
 offer=Offer; 
 dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
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
}
