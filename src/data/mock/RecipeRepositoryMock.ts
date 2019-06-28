import RecipeRepository from "../../domain/repository/RecipeRepository";
import { Recipe } from "../../domain/model/Recipe";
import { CookingStep } from "../../domain/model/CookingStep";

interface Mock {
    
}

export class RecipeRepositoryMock implements RecipeRepository {

    async getRecipes(): Promise<Recipe[]> {
        const recipes: Recipe[] = [];
        const steps = [
            new CookingStep(0, "Chop the onions"),
            new CookingStep(1, "Chop the tomatos"),
            new CookingStep(2, "Sauté onions and tomatoes together")
        ];
        const recipe = new Recipe("Chicken Soup", steps);

        recipes.push(recipe, recipe, recipe, recipe, recipe, recipe);

        return Promise.resolve(recipes);
    }

}