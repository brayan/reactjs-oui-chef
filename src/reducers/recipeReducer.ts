import { Reducer, AnyAction } from "redux";
import { RecipeState, RecipeTypes } from "../types/recipeTypes";

const INITIAL_STATE: RecipeState = {
    recipes: [],
    error: false,
    loading: false
}

const reducer: Reducer<RecipeState> = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case RecipeTypes.LOAD_REQUEST:
            return { ...state, loading: true };
        case RecipeTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, recipes: action.recipes };
        case RecipeTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true, recipes: [] };
        default:
            return state;
    }
};

export default reducer;