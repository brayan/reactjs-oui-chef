import React, { Component } from "react";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import * as RecipeActions from "../../redux/actions/recipeActions"
import Button from "@material-ui/core/Button/Button";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Timer from "../../domain/Timer";
import CookingStepView from "../component/CookingStepView";
import List from '@material-ui/core/List';
import { Recipe } from "../../domain/model/Recipe";
import ApplicationState from "../../redux/state/ApplicationState";

interface StateProps {
    cookingTimer: string;
    stepInProgressTimer: string;
    stepInProgress: number;
}

interface Props extends RouteComponentProps {
    readonly recipe: Recipe;
}

class CookingContainer extends Component<Props, StateProps> {

    private cookingTimer: Timer;
    private stepInProgressTimer: Timer;

    private cookingTimerInterval?: number;
    private stepInProgressTimerInterval?: number;

    constructor(props: Props) {
        super(props);
        this.cookingTimer = new Timer();
        this.stepInProgressTimer = new Timer();
        this.state = { cookingTimer: "", stepInProgressTimer: "", stepInProgress: 0 };
    }

    componentDidMount() {
        this.cookingTimerInterval = window.setInterval(() => {
            this.cookingTimer.increaseSecond();
            this.setCookingTimerView(this.cookingTimer.toString());
        }, 1000);

        this.startNewStepInProgressTimer();
    }

    componentWillUnmount() {
        window.clearInterval(this.cookingTimerInterval);
        window.clearInterval(this.stepInProgressTimerInterval);
    }

    private setCookingTimerView(cookingTimer: string) {
        this.setState({ cookingTimer });
    }

    private setStepInProgressTimerView(stepInProgressTimer: string) {
        this.setState({ stepInProgressTimer });
    }

    private onClickCancel() {
        this.props.history.replace("/recipeDetails");
    }

    private startNewStepInProgressTimer() {
        this.stepInProgressTimer = new Timer();

        window.clearInterval(this.stepInProgressTimerInterval);

        this.stepInProgressTimerInterval = window.setInterval(() => {
            this.stepInProgressTimer.increaseSecond();
            this.setStepInProgressTimerView(this.stepInProgressTimer.toString());
        }, 1000);
    }

    private onClickDone(stepOrder: number) {
        if (this.hasMoreSteps(stepOrder)) {
            this.startNewStepInProgressTimer();
            this.setState({ stepInProgress: (this.state.stepInProgress + 1) });
        } else {
            alert("DONE!!!!!");
            this.props.history.replace("/recipeDetails");
        }
    }

    private hasMoreSteps(stepOrder: number): boolean {
        return (this.props.recipe.steps.length > (stepOrder + 1));
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

                    <Typography variant="h2" component="h1" gutterBottom>
                        {this.state.cookingTimer}
                    </Typography>

                    <List className={classes.root}>
                        {recipe.steps.map((element, index) => {
                            return (
                                <CookingStepView
                                    key={index}
                                    step={element}
                                    stepInProgress={this.state.stepInProgress}
                                    timer={this.state.stepInProgressTimer}
                                    onClickDone={this.onClickDone.bind(this)} />);
                        })}
                    </List>

                </Container>

            </div>
        );
    }

}

const mapStateToProps = (state: ApplicationState) => {
    return ({
        recipe: state.details.recipeDetails,
    });

};

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RecipeActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CookingContainer);