import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as RecipeActions from "../../actions/recipeActions"
import { RouteComponentProps } from "react-router";
import { Recipe } from "../../domain/model/Recipe";
import RecipeListView from "../../ui/component/RecipeListView";
import { ApplicationState } from "../../";
import Button from "@material-ui/core/Button/Button";

interface StateProps {
    recipes: Recipe[],
    loading: boolean,
}

interface DispatchProps {
    loadRecipes(): void
    setRecipeDetails(recipe: Recipe): void
}

interface SelfProps {
    onClickRecipe(): void
}

type Props = StateProps & DispatchProps & SelfProps & RouteComponentProps;

class Recipes extends Component<Props> {

    componentDidMount() {
        this.props.loadRecipes();
    }

    componentWillReceiveProps(nextProps: any) {

    }

    private onClickRecipe(recipe: Recipe) {
        this.props.setRecipeDetails(recipe);
        this.props.history.push("/recipeDetails");
    }

    render() {

        return (
            <div>
                <RecipeListView
                    recipes={this.props.recipes}
                    onClickRecipe={this.onClickRecipe.bind(this)} />

                <Button
                    variant="contained"
                    color="primary">
                    New Recipe
                </Button>
            </div>
        );
    }

}

const mapStateToProps = (state: ApplicationState) => {
    return ({
        ...state.recipes,
    });

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecipeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Recipes);