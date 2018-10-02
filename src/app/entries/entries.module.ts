import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntryComponent } from './create-entry.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LogEntryService } from '../services/log-entry.service';
import { AuthGuard } from '../auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from '../services/token-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'createentry', component: CreateEntryComponent, canActivate: [AuthGuard] }
    ])
  ],
  declarations: [CreateEntryComponent],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LogEntryService,
    AuthGuard, 
     
  ]
})
export class EntriesModule { }
