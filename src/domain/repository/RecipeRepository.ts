import { Recipe } from "../model/Recipe";

export default interface RecipeRepository {
    getRecipes(): Promise<Recipe[]>;
    getRecipe(recipeId: number): Promise<Recipe>;
}