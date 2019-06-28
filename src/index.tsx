import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import { RecipeState } from './types/recipeTypes';
import { RecipeDetailsState } from './types/recipeDetailsTypes';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Recipes from './ui/page/Recipes';
import RecipeDetails from './ui/page/RecipeDetails';
import Cooking from './ui/page/Cooking';

export interface ApplicationState {
    recipes: RecipeState;
    details: RecipeDetailsState;
}

const store: Store<ApplicationState> = createStore(rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Recipes} />
                <Route path="/recipeDetails" component={RecipeDetails} />
                <Route path="/cooking" component={Cooking} />
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
