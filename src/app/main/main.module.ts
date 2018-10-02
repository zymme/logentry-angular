import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthGuard } from '../auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    RouterModule.forChild([
      { path: 'main', component: MainComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [ 
    AuthGuard
  ]
})
export class MainModule { }
