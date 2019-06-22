import RecipeRepository from "../../domain/repository/RecipeRepository";
import { Recipe } from "../../domain/model/Recipe";

export class RecipeRepositoryImpl implements RecipeRepository {
    
    async getRecipes(): Promise<Recipe[]> {
        return fetch('')
            .then(result => result.json());
    }

}