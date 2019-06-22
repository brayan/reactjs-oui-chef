import { Recipe } from "../model/Recipe";

export default interface RecipeRepository {
    getRecipes(): Promise<Recipe[]>
}