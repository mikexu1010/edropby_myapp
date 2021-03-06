import { Injectable } from '@angular/core';
import {Router, CanActivate} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(){
    if(this.authService.checkLoggedin()){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }

  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined ||
    user.password == undefined || user.retypepwd == undefined){
      return false;
    }else{
      return true;
    }
  }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePassword(pwd, repwd){
    if(pwd !== repwd){
      return false;
    }else{
      return true;
    }
  }

}
