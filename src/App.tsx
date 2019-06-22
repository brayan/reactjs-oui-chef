import React, { Component } from "react";
import { Recipe } from "./domain/model/Recipe";
import RecipeList from "./ui/components/RecipeList";

export default class App extends Component {

    private recipes: Recipe[] = [];

    constructor(props: any) {
        super(props);
        const steps = ["Step 1", "Step 2"];
        const recipe = new Recipe("Cicken Soup", steps);
        
        this.recipes.push(recipe);
        this.recipes.push(recipe);
        this.recipes.push(recipe);
        this.recipes.push(recipe);
        this.recipes.push(recipe);
        this.recipes.push(recipe);
        this.recipes.push(recipe);
    }

    render() {
        return (<RecipeList />);
    }

}