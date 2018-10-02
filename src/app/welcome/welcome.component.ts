import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public loggedIn: boolean = false;

  constructor(private _oauthService: OAuthService, private _authService: AuthenticationService) { 

  }

  ngOnInit() {

    console.log('inside ngOnInit() WelcomeComponent ... ');

    // if(this._oauthService.hasValidAccessToken()) {

    //   console.log("has valid token...");
    //   var claims = this._oauthService.getIdentityClaims();
    //   console.log(`User is ${claims['givenname']}`);

    //   localStorage.setItem('user', claims['givenname']);

    // }
  }

}
