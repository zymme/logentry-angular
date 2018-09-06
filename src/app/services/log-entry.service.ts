import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';

import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';
import { throwError } from "rxjs";

import { HttpErrorResponse } from "@angular/common/http/src/response";
import { ILogEntry } from '../logentry/ILogEntry';
import { Entry } from '../logentry/ILogEntry';

@Injectable({
  providedIn: 'root'
})
export class LogEntryService {
  private _entryApi: string;

  constructor(private _http: HttpClient) { 
    this._entryApi = environment.logEntryApi;

  }

  createLogEntry(inlogentry: ILogEntry) : Observable<ILogEntry> {

    try {

      var _logentry = <Entry> {
        logentry: inlogentry
      };

      console.log(`Entered createLogEntry with ${JSON.stringify(_logentry)}`);
      
      return this._http.post<ILogEntry>(this._entryApi, _logentry)
        .pipe( 
          tap(resp => console.log(`returned from api ${JSON.stringify(resp)}`)
        ), 
        catchError(this.handleError)
    );

    }
    catch(error){
      console.error("ERROR in createLogEntry: " + error);
      return null;
    }
    
  }

  private handleError(err: HttpErrorResponse)  {
    console.log('handleError received ' + err.message);
    return Observable.throw(err);
  }
}
