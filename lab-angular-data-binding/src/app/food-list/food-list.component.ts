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
  constructor() { }

  ngOnInit() {
    this.foods = foods;
  }

}

/*
const foods: Object[] = [
  {
    name: `Pizza`,
    calories: 400,
    image: `https://i.imgur.com/eTmWoAN.png`,
    quantity: 0
  },
*/
