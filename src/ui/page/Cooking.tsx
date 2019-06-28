import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import * as RecipeActions from "../../actions/recipeActions"
import { Recipe } from "../../domain/model/Recipe";
import { ApplicationState } from "../../.";
import Button from "@material-ui/core/Button/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

interface Props extends RouteComponentProps {
    recipe: Recipe
}

class Cooking extends Component<Props> {

    private onClickCancel() {
        // TODO:
    }

    render() {
        const { recipe } = this.props;

        const classes: any = makeStyles(theme => ({
            root: {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            },
            main: {
                marginTop: theme.spacing(8),
                marginBottom: theme.spacing(2),
            },
            footer: {
                padding: theme.spacing(2),
                marginTop: 'auto',
                backgroundColor: 'white',
            },
        }));

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Container component="main" className={classes.main} maxWidth="sm">

                <Button
                        onClick={this.onClickCancel.bind(this)}
                        variant="contained"
                        color="primary">
                        Cancel
                </Button>

                    <Typography variant="h2" component="h1" gutterBottom>
                        {recipe.name}
                    </Typography>

                </Container>

            </div>
        );
    }

}

const mapStateToProps = (state: ApplicationState) => {
    return ({
        ...state.details,
    });

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecipeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cooking);