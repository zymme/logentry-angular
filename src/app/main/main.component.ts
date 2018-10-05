import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  private _name: string;
  
  constructor(private _oauthService: OAuthService) { 

    console.log("Inside MainComponent ctor...");

    if(localStorage.getItem('user')) {
      this._name = localStorage.getItem('user');
    }
   
  }

  ngOnInit() {
  }

  public get name() {
    return this._name;
  }

}
