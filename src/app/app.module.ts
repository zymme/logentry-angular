import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { OAuthModule } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EntriesModule } from './entries/entries.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MainComponent } from './main/main.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    
        
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },       
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    BsDropdownModule.forRoot(),
    MainModule,
    EntriesModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
