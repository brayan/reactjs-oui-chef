import { Dispatch } from "redux";
import RepositoryFactory from "../../data/RepositoryFactory";
import { RecipeDetailsTypes } from "../types/recipeDetailsTypes";
import ApplicationState from "../state/ApplicationState";

const repository = RepositoryFactory.getRecipeRepository();

export function setRecipe(recipeId: number) {
    return { type: RecipeDetailsTypes.SET_RECIPE, recipeId };
}

export function loadRecipeDetails() {
    return async (dispatch: Dispatch, getState: () => ApplicationState) => {
        try {
            const { recipeId } = getState().details;

            dispatch(loadRequest());
            const recipe = await repository.getRecipe(recipeId);

            dispatch({ type: RecipeDetailsTypes.LOAD_SUCCESS, recipeDetails: recipe });
        } catch (error) {
            dispatch(loadFailure());
        }
    }
}

function loadRequest() {
    return { type: RecipeDetailsTypes.LOAD_REQUEST };
}

function loadFailure() {
    return { type: RecipeDetailsTypes.LOAD_FAILURE };
}