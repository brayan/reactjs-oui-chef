import { Recipe } from "../domain/model/Recipe";

/**
 * Action types
 */
export enum RecipeDetailsTypes {
    SET_RECIPE = "@recipeDetails/SET_RECIPE",
}

/**
 * State type
 */
export interface RecipeDetailsState {
    readonly recipe: Recipe
}
