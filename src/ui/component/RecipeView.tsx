import React, { Component } from "react";
import { Recipe } from "../../domain/model/Recipe";
import './RecipeView.css';
import { ListItem } from "@material-ui/core";

interface Props {
    readonly recipe: Recipe;
    onClickRecipe(recipe: Recipe): void
}

export default class RecipeView extends Component<Props> {

    render() {
        const { recipe, onClickRecipe } = this.props;
        
        return (
            <div className="recipeWrapper">
                <ListItem button onClick={() => onClickRecipe(recipe)}>
                {recipe.name}
                </ListItem>
            </div>
        );
    }
}