import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private _loggedIn: boolean = false;

  constructor(private _authNService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    console.log('in ngOnInit() for LogIn ...');

    this._authNService.checkAuthToken();

    if(localStorage.getItem('user')) {
      this._loggedIn = true;
    }
  }

  public get loggedIn() : boolean {
    return this._loggedIn;
  }

  public logOut() : void {
    console.log("logging out user ...");

    localStorage.removeItem('user');

    this._authNService.logOut();

    // this._router.navigate(['/welcome']);

  }

  public logIn() : void {
    console.log('login called...');

    this._authNService.logIn();
  }
}
