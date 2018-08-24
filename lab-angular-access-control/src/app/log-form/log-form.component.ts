import { AccessControlLogService } from './../services/access-control-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {

  constructor(private accessControlLog: AccessControlLogService) { }

  ngOnInit() {
  }
  addAccessItem(person: string, message: string){

  }
}
