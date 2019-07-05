import RecipeState from "./RecipeState";
import RecipeDetailsState from "./RecipeDetailsState";

export default interface ApplicationState {
    recipes: RecipeState;
    details: RecipeDetailsState;
}