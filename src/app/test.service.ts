import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
    edit(arg0: any, arg1: any): any {
      throw new Error('Method not implemented.');
    }

  constructor(private http: HttpClient) { }
  sample(user) {
    // alert('in sample');
    // return this._http.get('https://jsonplaceholder.typicode.com/todos/uesr=sdjfgkjshd', {} , );
    const myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer token dsfsdfsdfsffd'
    });
    const postHeader: any = { headers: myHeaders, responseType: 'json', observe: 'response' };

    // return this._http.get('https://jsonplaceholder.typicode.com/todos/1');
    return this.http.post('http://localhost:3000/test', user);
    // return this._http.get('http://localhost:3000/test');
}
}
