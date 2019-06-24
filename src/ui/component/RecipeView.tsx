import React, { Component } from "react";
import { Recipe } from "../../domain/model/Recipe";

interface Props {
    readonly recipe: Recipe
    onClickRecipe(): void
}

export default class RecipeView extends Component<Props> {

    render() {
        const { recipe, onClickRecipe } = this.props;

        return (
            <div onClick={onClickRecipe}>
                {recipe.name}
            </div>
        );
    }
}