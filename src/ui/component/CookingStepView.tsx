import React, { Component } from "react";
import './RecipeView.css';
import { CookingStep } from "../../domain/model/CookingStep";
import Button from "@material-ui/core/Button/Button";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Timer from '@material-ui/icons/Timer';
import ListItemText from '@material-ui/core/ListItemText';

interface Props {
    readonly step: CookingStep;
    readonly stepInProgress: number;
    readonly timer: string;
    onClickDone(stepId: number): void;
}

export default class CookingStepView extends Component<Props> {

    render() {
        const { step, stepInProgress, timer, onClickDone } = this.props;

        return (
            <ListItem>
                
                {(step.order === stepInProgress) ? (
                    <ListItemAvatar>
                        <Avatar>
                            <Timer />
                        </Avatar>
                    </ListItemAvatar>
                ) : (null)}

                <ListItemText
                    primary={step.description}
                    secondary={(step.order === stepInProgress) ? timer : null} />

                {(step.order === stepInProgress) ? (
                    <Button
                        onClick={() => onClickDone(step.order)}
                        variant="contained"
                        color="primary">
                        DONE!
                </Button>
                ) : (null)}
            </ListItem>
        );
    }
}