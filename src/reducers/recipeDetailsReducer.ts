import { Reducer, AnyAction } from "redux";
import { RecipeDetailsState, RecipeDetailsTypes } from "../types/recipeDetailsTypes";
import { Recipe } from "../domain/model/Recipe";

const INITIAL_STATE: RecipeDetailsState = {
    recipe: new Recipe("", []),
}

const reducer: Reducer<RecipeDetailsState> = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case RecipeDetailsTypes.SET_RECIPE:
            return { ...state, recipe: action.recipe };
        default:
            return state;
    }
};

export default reducer;