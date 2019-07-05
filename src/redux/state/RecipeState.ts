import { Recipe } from "../../domain/model/Recipe";

export default interface RecipeState {
    readonly recipes: Recipe[];
    readonly loading: boolean;
    readonly error: boolean;
}