import User from 'src/class/User';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/User.service';
import { Router } from '@angular/router';
import Child from 'src/class/Child';
import { ChildService } from 'src/service/Child.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  isChild: boolean = false;
  HMOList: string[] = ["מאוחדת", "כללית", "לאומית", "מכבי"];
  genderList: string[] = ["זכר", "נקבה"];
  user: User;
  isButtonChild: boolean = false;
  child: Child;
  localUser: User;
  saveUser() {
    this.userService.RegisterUser(this.user).subscribe((succ) => {
      localStorage.setItem('user', JSON.stringify(this.user));
      localStorage.setItem('user', JSON.stringify(succ));
    this.isButtonChild = true;
    }
      , (err) => {
        console.log("err");
        localStorage.setItem('user', JSON.stringify(this.user));
      });
  };

  
  addEntity() {
    this.child.parent = this.user;
    this.child.ParentId = JSON.parse(localStorage.getItem('user')).id;
    if (this.isChild == true) {
      this.childService.RegisterChild(this.child).subscribe((succ) => { 
        console.log("cchildsucceed");
        this.router.navigate(["/end"]);

      }, (err) => {
        console.log("err");
      });
    }
   
  }
  addChild() {
    this.isChild = true;
  }
  moreChild() {
    this.child.parent = this.user;
    this.child.ParentId = JSON.parse(localStorage.getItem('user')).id;
    this.childService.RegisterChild(this.child).subscribe((succ) => { 
      console.log("registersucceed");
      this.child.FirstName = null;
      this.child.LastName = null;
      this.child.Tz = null;
      this.child.BirthDate = new Date();
      this.child.parent = null;
      this.child.ParentId = 0;
    }, (err) => {
      console.log("err");
    });

  }
  constructor(public userService: UserService, public router: Router, public childService: ChildService) { }
  ngOnInit(): void {
    if (localStorage.getItem('user') != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    else {
      this.user = new User( "", "", "", new Date(), "", "");
    }
    if (localStorage.getItem('isChild') == 'true')
    {
      this.child = JSON.parse(localStorage.getItem('child'));
      this.isChild=true;
    }
    else
    {
      this.child = new Child(0, "", "", "", new Date(), null,null);
      this.isChild=false;
    }
  }
  ngOnDestroy(): void {
   
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('child', JSON.stringify(this.child));
    if (this.isChild)
      localStorage.setItem('isChild', 'true');
    else
      localStorage.setItem('isChild', 'false');
  }
}
