import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Haha this is simply a test!', 'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg')
    ];
    
      constructor() { }
    
      ngOnInit() {
      }
    
    }