import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {LoginComponent} from './login/login.component';
import {MainPageComponent} from './main-page/main-page.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
