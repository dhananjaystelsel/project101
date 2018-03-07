export class Offer{
    name:string;
    fromDate:string;
    toDate:string;
    plan:string;
    discount:string;
    status:Status;
    constructor(){
     this.status = new Status();
    }
    
}
export class Status{
    active:string;
    nonActive:string;
}