import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];
  newFood: Object = {};
  key: string;

  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

  recordAllTheKeyStrokes(event) {
    // console.log(`Key inserted: ${event.key}`);
    this.key = event.key;
    // console.log(`Input value: ${event.currentTarget.value}`);
  }
}

