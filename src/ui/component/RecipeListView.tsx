import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Recipe } from "../../domain/model/Recipe";
import * as RecipeActions from "../../actions/recipeActions"
import { ApplicationState } from "../..";
import RecipeView from "./RecipeView";
import Button from '@material-ui/core/Button';

interface StateProps {
    recipes: Recipe[],
    loading: boolean
}

interface DispatchProps {
    loadRecipes(): void;
}

type Props = StateProps & DispatchProps;

class RecipeListView extends Component<Props> {

    componentDidMount() {
        this.props.loadRecipes();
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.test) {
            console.log("test");
        }
        console.log("componentWillReceiveProps");
        console.log(nextProps);
    }


    onClickButton() {
        this.props.loadRecipes();
    }

    onClickRecipe() {
        console.log("On click recipe!!!!");
    }

    render() {
        const { recipes } = this.props;

        return (
            <>
                <ul>
                    {
                        recipes.map(recipe =>
                            <li>
                                <RecipeView
                                    recipe={recipe}
                                    onClickRecipe={this.onClickRecipe.bind(this)} />
                            </li>
                        )
                    }
                </ul>

                <Button
                    onClick={this.onClickButton.bind(this)}
                    variant="contained"
                    color="primary">
                    Click me
                </Button>
            </>
        );
    }

}

const mapStateToProps = (state: ApplicationState) => {
    return ({
        ...state.recipes,
    });

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecipeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeListView);