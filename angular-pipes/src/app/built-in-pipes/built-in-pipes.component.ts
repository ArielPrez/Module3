import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  template: `
    <p> My name is {{ 'Jack' | uppercase }} </p>
  `,
  styles: [],
  // templateUrl: './built-in-pipes.component.html',
  // styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
