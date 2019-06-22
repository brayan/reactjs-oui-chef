import { Recipe } from "../domain/model/Recipe";

/**
 * Action types
 */
export enum RecipeTypes {
    LOAD_REQUEST = "@recipe/LOAD_REQUEST",
    LOAD_SUCCESS = "@recipe/LOAD_SUCCESS",
    LOAD_FAILURE = "@recipe/LOAD_FAILURE"
}

/**
 * State type
 */
export interface RecipeState {
    readonly data: Recipe[]
    readonly loading: boolean
    readonly error: boolean
}