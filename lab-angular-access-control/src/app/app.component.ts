import { Component, OnInit } from '@angular/core';
import { AccessControlLogService } from './services/access-control-log.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [AccessControlLogService]
})
export class AppComponent implements OnInit {
  constructor(private accessControlLog: AccessControlLogService){}
  title = 'Access Control';
  ngOnInit(){}
  getAccessLogMethod(){
    this.accessControlLog.getAccessLog();
  }
  addAccessItemMethod(){
    this.accessControlLog.getAccessLog();
  }
}
