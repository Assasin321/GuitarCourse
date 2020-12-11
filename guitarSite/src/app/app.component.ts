import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'guitarSite';
  date: Date = new Date();
  unVisible = false;
  other = false;




  constructor() {
  }


  onVisible():void {

    if(!this.unVisible )
    {
      this.unVisible = true;
    }
    else {
      this.unVisible = false;
    }
  }

  otherVisible(): void{
    if(this.unVisible)
    {
      this.unVisible = false;
    }
  }

  ngOnInit(): void {

  }




}
