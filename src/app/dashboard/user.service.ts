import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  BASE_URL='https://jsonplaceholder.typicode.com/users';

  public getHeader()
  {
    return{headers:new HttpHeaders().set('content-Type','application/json')};
  }

getAllData():Observable<any>{
  return this.http.get(`${this.BASE_URL}`, this.getHeader());
}

}
