import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import * as RecipeActions from "../../redux/actions/recipeActions"
import * as RecipeDetailsActions from "../../redux/actions/recipeDetailsActions"
import { RouteComponentProps } from "react-router";
import RecipeListView from "../component/RecipeListView";
import Button from "@material-ui/core/Button/Button";
import ApplicationState from "../../redux/state/ApplicationState";
import RecipeState from "../../redux/state/RecipeState";

interface DispatchProps {
    loadRecipes(): void;
    setRecipe(recipeId: number): void;
}

interface SelfProps {
    onClickRecipe(): void
}

type Props = RecipeState & DispatchProps & SelfProps & RouteComponentProps;

class RecipesContainer extends Component<Props> {

    componentDidMount() {
        this.props.loadRecipes();
    }

    private onClickRecipe(recipeId: number) {
        this.props.setRecipe(recipeId);
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

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        ...bindActionCreators(RecipeActions, dispatch),
        ...bindActionCreators(RecipeDetailsActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);