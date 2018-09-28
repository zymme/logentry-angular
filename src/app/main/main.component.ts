import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  constructor(private _oauthService: OAuthService) { 

    console.log("Inside MainComponent ctor...");

    var token = this._oauthService.getAccessToken();
    console.log(`token: ${token}`);

    debugger;

    var claims = this._oauthService.getIdentityClaims();
    console.log(`claims for this user: ${claims}`);

    let arr = [];

    for(let k in claims)
    {
      console.log(k);
      console.log(claims[k]);
    }

  }

  ngOnInit() {
  }

}
