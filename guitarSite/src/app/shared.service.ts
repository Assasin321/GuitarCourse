import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = 'http://localhost:60051/api';
  public isLog = false;
  public loginName = '';
  constructor(private http: HttpClient) { }

  getUsersList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Users' );
  }

  // tslint:disable-next-line:typedef
  addUser(val: any){
    return this.http.post(this.APIUrl + '/Users', val);
  }

  // tslint:disable-next-line:typedef
  updateUser(val: any){
    return this.http.put(this.APIUrl + '/Users' , val);
  }

  // tslint:disable-next-line:typedef
  deleteUser(val: any){
    return this.http.delete(this.APIUrl + '/Users/' + val);
  }
}
