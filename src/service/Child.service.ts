import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import User from 'src/class/User';
import Child from 'src/class/Child';


@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor(public http:HttpClient) { }
  baseRouteUrl = `${environment.baseUrl}/Child`
  GetAllChildren() {
    return this.http.get<Child[]>(`${this.baseRouteUrl}`);
  }
  GetChildById(id) {
    return this.http.get<Child>(`${this.baseRouteUrl}`,id);
  }

 RegisterChild(child:Child) {
   return this.http.post<Child>(`${this.baseRouteUrl}`,child);
  }

}
