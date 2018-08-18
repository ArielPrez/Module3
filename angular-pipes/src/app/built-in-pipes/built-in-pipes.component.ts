import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  template: `
    <p>
    <p> Date: {{ today }} </p>
    <p> Date: {{ today | date:'dd/MM/yyyy' }} </p>

    <button (click)="increment()"> Add one day! </button>
    </p>
  `,
  styles: [],
  // templateUrl: './built-in-pipes.component.html',
  // styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  today = new Date();
  increment(){
    const changedDate = new Date(this.today);
    // increase the day of the month
    changedDate.setDate(this.today.getDate() + 1);
    // update our date
    this.today = changedDate;

    // this.today.setDate(this.today.getDate() + 1); ===> this do not work!
  }

}
