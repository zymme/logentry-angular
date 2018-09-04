import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EntriesModule } from './entries/entries.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    BsDropdownModule.forRoot(),
    MainModule,
    EntriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
