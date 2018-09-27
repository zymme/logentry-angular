import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { OAuthService } from "angular-oauth2-oidc";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService,) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log('inside the AuthGuard ...');
      
      if(this.oauthService.hasValidAccessToken())
      {
        return true;        
      }

      // no valid access token call implicit flow
      this.oauthService.initImplicitFlow();

  }
}
