import { Dispatch } from "redux";
import RepositoryFactory from "../data/RepositoryFactory";
import { RecipeTypes } from "../types/recipeTypes";

const repository = RepositoryFactory.getRecipeRepository();

export function loadRecipes() {
    return async (dispatch: Dispatch) => {
        try {
            dispatch(loadRequest());

            const recipes = await repository.getRecipes();

            dispatch({ type: RecipeTypes.LOAD_SUCCESS, recipes: recipes });
        } catch (error) {
            dispatch(loadFailure());
        }
    }
}

function loadRequest() {
    return { type: RecipeTypes.LOAD_REQUEST };
}

function loadFailure() {
    return { type: RecipeTypes.LOAD_FAILURE };
}