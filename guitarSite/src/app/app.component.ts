import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SharedService} from './shared.service';

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
  loginName = '';




  constructor(private service: SharedService) {
  }


  onVisible(): void {

    if (!this.unVisible )
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

  checkLogin(): boolean{
    this.checkName();
    return this.service.isLog;

  }

  checkName(): string{
    this.loginName = this.service.loginName;
    return this.loginName;
  }




}
