import { Recipe } from './recipe.model';

export class RecipeService {
   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Haha this is simply a test!', 'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg'),
        new Recipe('Another Test Recipe', 'Haha this is simply anonther test!', 'http://www.fnstatic.co.uk/images/content/recipe/one-pot-pan-seared-chicken-breasts-with-cherry-tomatoes-and-white-beans.jpg')
        ];

        getRecipes() {
            return this.recipes.slice();
        }
}