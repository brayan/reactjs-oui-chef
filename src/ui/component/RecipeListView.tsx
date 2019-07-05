import React, { Component } from "react";
import RecipeView from "./RecipeView";
import List from "@material-ui/core/List";
import { Recipe } from "../../domain/model/Recipe";

interface Props {
    readonly recipes: Recipe[];
    onClickRecipe(recipeId: number): void;
}

export default class RecipeListView extends Component<Props> {

    render() {
        const { recipes, onClickRecipe } = this.props;

        return (
                <List component="nav" aria-label="Secondary mailbox folders">
                    {
                        recipes.map((recipe, index) =>
                            <RecipeView
                                key={index}
                                recipe={recipe}
                                onClickRecipe={onClickRecipe} />
                        )
                    }
                </List>
        );
    }
}