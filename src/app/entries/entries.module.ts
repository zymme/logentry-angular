import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEntryComponent } from './create-entry.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LogEntryService } from '../services/log-entry.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'createentry', component: CreateEntryComponent }
    ])
  ],
  declarations: [CreateEntryComponent],
  exports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    LogEntryService
  ]
})
export class EntriesModule { }
