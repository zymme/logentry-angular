import { Component, OnInit } from '@angular/core';

import { ILogEntry } from '../logentry/ILogEntry';
import { LogEntryService } from '../services/log-entry.service';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css']
})
export class CreateEntryComponent implements OnInit {

  private _activity: string;
  private _duration: string;
  private _notes: string;
  private _user: string;

  constructor(private _logEntryService: LogEntryService) { }

  ngOnInit() {
  }

  get activity(): string {
    return this._activity;
  }
  set activity(value: string) {
    console.log(`value of activity is ${value}`);
    this._activity = value;
  }

  get duration(): string {
    return this._duration;
  }
  set duration(value: string) {
    this._duration = value;
  }

  get notes(): string {
    return this._notes;
  }
  set notes(value: string) {
    this._notes = value;
  }

  get user(): string {
    return this._user;
  }
  set user(value: string) {
    this._user = value;
  }




  createLogEntry(): void {
    console.log("Entered createLogEntry, about to call create logentry...");

    var logentry = <ILogEntry> {
      duration: this._duration,
      activity: this._activity,
      notes: this._notes,
      user: this._user,
      date: new Date()
    }
    
    try {
      console.log(`sending ${JSON.stringify(logentry)}`);

      this._logEntryService.createLogEntry(logentry)
          .subscribe(resp => {
            console.log(`after logentry post ${JSON.stringify(resp)}`);
          },
          error => {
            console.error(`error calling createLogEntry ${error}`);
          }
         )
    }
    catch(err) {
      console.log("In 'general catch' in create-entry.component ");
      console.error(err);
    }

  }
}
