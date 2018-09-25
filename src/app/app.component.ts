import { Component, Inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from './auth/authConfig';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Run Log';

  constructor(private oauthService: OAuthService, 
    private router: Router, 
    @Inject(PLATFORM_ID) private platformId: Object ) {

    console.log('In app component ctor...');

    if(isPlatformBrowser(platformId)) {
      this.oauthService.configure(authConfig);
      this.oauthService.tokenValidationHandler = new JwksValidationHandler();
      this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }
    
  }

  ngOnInit() {
    console.log('In ngOnInit() ...');


  }


}
