import { mock } from "../config.json"
import RecipeRepository from "../domain/repository/RecipeRepository";
import { RecipeRepositoryMock } from "./mock/RecipeRepositoryMock";
import { RecipeRepositoryImpl } from "./repository/RecipeRepositoryImpl";

export default class RepositoryFactory {

    static getRecipeRepository(): RecipeRepository {
        return (mock.recipe ? new RecipeRepositoryMock() : new RecipeRepositoryImpl());
    }
    
}