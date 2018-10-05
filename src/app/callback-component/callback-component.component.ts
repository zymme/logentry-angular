import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback-component',
  template: '',
  styleUrls: ['./callback-component.component.css']
})
export class CallbackComponentComponent implements OnInit {

  constructor(private _oauthService: OAuthService, private _router: Router) { }

  ngOnInit() {
    this._oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {

      if (!this._oauthService.hasValidIdToken() || !this._oauthService.hasValidAccessToken()) {
          this._oauthService.initImplicitFlow();
      } else {
          this._router.navigate(["/welcome"]);
      }

  });
  }

}
