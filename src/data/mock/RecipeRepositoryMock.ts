import RecipeRepository from "../../domain/repository/RecipeRepository";
import { Recipe } from "../../domain/model/Recipe";

export class RecipeRepositoryMock implements RecipeRepository {
    
    async getRecipes(): Promise<Recipe[]> {
        const recipes: Recipe[] = [];
        const steps = ["Step 1", "Step 2", "Step 3"];
        const recipe = new Recipe("Chicken Soup", steps);

        recipes.push(recipe, recipe, recipe, recipe, recipe, recipe);

        return Promise.resolve(recipes);
    }

}