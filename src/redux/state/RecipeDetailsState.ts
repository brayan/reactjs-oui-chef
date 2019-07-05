import { Recipe } from "../../domain/model/Recipe";

export default interface RecipeDetailsState {
    readonly recipeId: number;
    readonly recipeDetails: Recipe;
    readonly loading: boolean;
    readonly error: boolean;
}