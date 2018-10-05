import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [LoginComponent],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    AuthGuard
  ]
})
export class LoginModule { }
