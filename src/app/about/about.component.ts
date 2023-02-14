import { Component } from '@angular/core';
import User from 'src/class/User';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
 aboutUser:User;
  message:string;
  ngOnInit(): void {
  if(JSON.parse(localStorage.getItem('user')) ==null)
  this.message="שלום"
  else
  {
    this.aboutUser=JSON.parse(localStorage.getItem('user'));
    if(this.aboutUser.LastName==null)
    this.message="שלום"+" "+this.aboutUser.FirstName;
    if(this.aboutUser.FirstName==null)
    this.message="שלום"+" "+this.aboutUser.LastName;
    else
    this.message="שלום"+" "+this.aboutUser.FirstName+" "+this.aboutUser.LastName;
  }
 }
}
