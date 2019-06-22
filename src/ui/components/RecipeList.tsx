import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Recipe } from "../../domain/model/Recipe";
import * as RecipeActions from "../../actions/recipeActions"
import { ApplicationState } from "../..";

interface StateProps {
    recipes: Recipe[],
    loading: boolean
}

interface DispatchProps {
    loadRecipes(): void;
}

type Props = StateProps & DispatchProps;

class RecipeList extends Component<Props> {

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

    render() {
        const { recipes } = this.props;

        return (
            <>
                <ul>
                    {recipes.map(item => <li>{item.name}</li>)}
                </ul>
                <button onClick={this.onClickButton.bind(this)}>Click me</button>
            </>
        );
    }

}

const mapStateToProps = (state: ApplicationState) => {
    return ({
        recipes: state.recipes.data,
        loading: state.recipes.loading,
    });

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecipeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);