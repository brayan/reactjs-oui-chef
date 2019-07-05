import React, { Component } from "react";
import './RecipeView.css';
import { ListItem } from "@material-ui/core";
import { Recipe } from "../../domain/model/Recipe";

interface Props {
    readonly recipe: Recipe;
    onClickRecipe(recipeId: number): void;
}

export default class RecipeView extends Component<Props> {

    render() {
        const { recipe, onClickRecipe } = this.props;
        
        return (
            <div className="recipeWrapper">
                <ListItem button onClick={() => onClickRecipe(recipe.id)}>
                {recipe.name}
                </ListItem>
            </div>
        );
    }
}