import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

interface foodsInterfaz {
  name: string;
  calories: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-food-list',
  template: `
  `,
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsArr: Object[];
  newFood: Object = {};
  todayFoods: foodsInterfaz[];
  key: string;
  add: string = 'Add New';
  isInputDisabled: Boolean = false;
  color: Boolean = false;
  isActive = true;
  pattern: string;
  tCal: number = 0;

  constructor() { }

  ngOnInit() {
    this.foodsArr = foods;);
    this.todayFoods = []  }

  recordAllTheKeyStrokes(event) {
    // console.log(`Key inserted: ${event.key}`);
    this.key = event.key;
    // console.log(`Input value: ${event.currentTarget.value}`);
  }

  toggleInput() {
        this.isInputDisabled = !this.isInputDisabled;
        this.isActive = !this.isActive;
        if (this.isInputDisabled) {
          this.add = 'Activate';
        } else {
          this.add = 'Add New';
        }
        
        
  }
  changeBorder(){
    this.color = !this.color; 
  } 

  addItem(){
    this.foodsArr.push(this.newFood);
    this.newFood = {};
  }

  addItemToList(item,qty){
    
    this.tCal += item.calories * qty;
    this.todayFoods.forEach(element => {
      if(element.name === item.name){
        item.quantity += Number(qty);
      }
    }); 
    this.todayFoods.push(item);
  }
  
}

