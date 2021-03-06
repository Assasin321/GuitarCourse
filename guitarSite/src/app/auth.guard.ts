import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {SharedService} from './shared.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

  constructor(private service: SharedService ,
              private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean > | Promise<boolean > | boolean  {
    if(this.service.isLog)
    {
      return true;
    }
    else
    {
      this.router.navigate(['/login'])
    }
  }

}
