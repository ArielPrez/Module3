import { AccessControlLogService } from './../services/access-control-log.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
  providers: [AccessControlLogService]
})
export class LogFormComponent implements OnInit {

  constructor(private accessControlLog: AccessControlLogService) { }

  ngOnInit() {
  }

  // HARD PART!!
  addAccessItem(person: string, message: string){

  }
}
