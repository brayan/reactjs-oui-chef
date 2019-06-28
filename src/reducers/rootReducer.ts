import { combineReducers } from "redux";
import recipes from "./recipeReducer";
import details from "./recipeDetailsReducer";

export default combineReducers({
    recipes, details
});