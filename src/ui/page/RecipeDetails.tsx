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

class RecipeDetails extends Component<Props> {

    private onClickStart() {
        // TODO
        // this.props.startCooking();
        this.props.history.push("/cooking");
    }

    private onClickEdit() {
        // TODO
    }

    private onClickDelete() {
        // TODO
    }

    private onClickExportAsShoppingList() {
        // TODO
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
                        onClick={this.onClickEdit.bind(this)}
                        variant="contained"
                        color="primary">
                        Edit
                </Button>

                <Button
                        onClick={this.onClickDelete.bind(this)}
                        variant="contained"
                        color="primary">
                        Delete
                </Button>

                <Button
                        onClick={this.onClickExportAsShoppingList.bind(this)}
                        variant="contained"
                        color="primary">
                        Export as Shopping List
                </Button>
                    <Typography variant="h2" component="h1" gutterBottom>
                        {recipe.name}
                    </Typography>

                    {recipe.steps.map((element, index) => <Typography key={index} variant="body1">{element.description}</Typography>)}

                    <Button
                        onClick={this.onClickStart.bind(this)}
                        variant="contained"
                        color="primary">
                        Start!
                </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);