import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipeItem?:any;
  
  constructor(private recipeSer: RecipeService) { }

  ngOnInit(): void {
  }

  selcetedRecipe() {
    this.recipeSer.selectedRecipe.emit(this.recipeItem);
  }
}
