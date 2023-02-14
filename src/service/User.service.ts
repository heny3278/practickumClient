import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import User from 'src/class/User';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public http:HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/User`
  GetAllUsers() {
    return this.http.get<User[]>(`${this.baseRouteUrl}`);
  }
  GetUserById(id) {
    return this.http.get<User>(`${this.baseRouteUrl}`,id);
  }
 RegisterUser(user:User) {
   return this.http.post<User>(this.baseRouteUrl,user);
  }
}
