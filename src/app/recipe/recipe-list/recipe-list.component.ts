import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  burger = new Recipe('Burger', 'Unhealthy',
    'https://cdn.pixabay.com/photo/2016/08/31/21/47/burger-1634705_960_720.jpg');
  recipes: Recipe[] = [];

  constructor() {
    this.recipes.push(new Recipe('Rajma Chawal', 'Tasty Dish',
      'https://cdn.pixabay.com/photo/2016/08/31/21/47/burger-1634705_960_720.jpg'));
    this.recipes.push(this.burger);
  }

  ngOnInit() {
  }

}
