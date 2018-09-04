import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BsDropdownModule,
    RouterModule.forChild([
      { path: 'main', component: MainComponent }
    ])
  ],
  declarations: [
    MainComponent
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class MainModule { }
