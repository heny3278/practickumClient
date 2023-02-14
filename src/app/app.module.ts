import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
//
import{HttpClientModule} from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatIconModule} from '@angular/material/icon';
import { AboutComponent } from './about/about.component';
import { EndComponent } from './end/end.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AboutComponent,
    EndComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
   
    
  ],
  providers: [
    MatInputModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
