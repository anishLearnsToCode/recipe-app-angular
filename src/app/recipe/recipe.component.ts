import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor() {
    $(document).ready(function(){
      $(window).resize(function(){
        $('.fullheight').height($(document).height());
      });
    });
  }

  ngOnInit() {
  }

}
