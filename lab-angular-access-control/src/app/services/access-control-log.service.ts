import { Injectable } from '@angular/core';
// import * as _ from 'underscore';

interface logMessageInterfaz {
  person: String; 
  message: String;
  createdAt: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AccessControlLogService {
  // logMessages: Object = [];
  logMessages: logMessageInterfaz[];
  
  constructor() { }
  // _.findIndex() & _.findWhere ==> method from 'underscore'

  getAccessLog(){
    return this.logMessages;
  }
  
  addAccessItem(person, message) {
    this.logMessages.push(person, message);
  }
}
