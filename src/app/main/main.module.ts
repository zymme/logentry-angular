import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AuthGuard } from '../auth/auth.guard';


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
