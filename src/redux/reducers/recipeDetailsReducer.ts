import { Reducer, AnyAction } from "redux";
import { RecipeDetailsTypes } from "../types/recipeDetailsTypes";
import RecipeDetailsState from "../state/RecipeDetailsState";

const INITIAL_STATE: RecipeDetailsState = {
    recipeId: 0,
    recipeDetails: {
        id: 0,
        name: "",
        steps: []
    },
    loading: false,
    error: false
}

const reducer: Reducer<RecipeDetailsState> = (state = INITIAL_STATE, action: AnyAction) => {
    switch (action.type) {
        case RecipeDetailsTypes.SET_RECIPE:
            const recipeDetails = { id: 0, name: "", steps: [] };
            return { ...state, recipeId: action.recipeId, recipeDetails };

        case RecipeDetailsTypes.LOAD_REQUEST:
            return { ...state, loading: true };

        case RecipeDetailsTypes.LOAD_SUCCESS:
            return { ...state, loading: false, recipeDetails: action.recipeDetails };

        case RecipeDetailsTypes.LOAD_FAILURE:
            return { ...state, loading: false, error: true };

        default:
            return state;
    }
};

export default reducer;