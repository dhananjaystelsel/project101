import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Person} from '../modal/person';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {
    url = "http://192.168.1.4:3000/dt";
    constructor(private http:Http) { }
    getPersonsWithObservable(): Observable<Person[]> {
        return this.http.post(this.url,{})
		   .map(this.extractData)
		   .catch(this.handleErrorObservable);
    }
    addBookWithObservable(person:Person): Observable<Person> {
	let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.url, person, options)
                   .map(this.extractData)
                   .catch(this.handleErrorObservable);
    }
 
    private extractData(res: Response) {
	let body = res.json();
        return body || {};
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	
} 