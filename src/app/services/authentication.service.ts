import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _oauthService: OAuthService, private _router: Router) { }

  public isloggedIn() : boolean {

    if(localStorage.getItem('user')) {
      return true;
    }
    return false;
  }

  public logOut() : void {
    
    localStorage.removeItem('user');
    console.log('removing localstorage user ...');
    
    this._oauthService.logOut();
    
  }

  public checkAuthToken() : void {

    console.log("Inside checkAuthToken() ...");
    console.log(this._oauthService.getAccessToken());

    if(this._oauthService.hasValidAccessToken()) {

      console.log("has valid token...");
      var claims = this._oauthService.getIdentityClaims();
      console.log(`User is ${claims['givenname']}`);

      localStorage.setItem('user', claims['givenname']);

    } 
    else {
      console.log("in else condition of hasValidAccessToken ");

    }
    


  }

  public logIn() : void {
    console.log("calling implicitFlow to login against IdP...");
    this._oauthService.initImplicitFlow();
  }
}
