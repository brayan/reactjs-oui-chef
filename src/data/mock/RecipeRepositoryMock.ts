import RecipeRepository from "../../domain/repository/RecipeRepository";
import { Recipe } from "../../domain/model/Recipe";
import { CookingStep } from "../../domain/model/CookingStep";

export class RecipeRepositoryMock implements RecipeRepository {

    async getRecipes(): Promise<Recipe[]> {
        const recipes: Recipe[] = [];

        recipes.push(this.createRecipe(),
            this.createRecipe(),
            this.createRecipe(),
            this.createRecipe(),
            this.createRecipe(),
            this.createRecipe());

        return Promise.resolve(recipes);
    }

    async getRecipe(recipeId: number): Promise<Recipe> {
        return Promise.resolve(this.createRecipe());
    }

    private createRecipe(): Recipe {
        const steps = [
            new CookingStep(0, "Chop the onions"),
            new CookingStep(1, "Chop the tomatos"),
            new CookingStep(2, "Sauté onions and tomatoes together")
        ];
        return new Recipe(12, "Chicken Soup", steps);
    }

}