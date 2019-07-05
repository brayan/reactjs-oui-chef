import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store, compose } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './redux/reducers/rootReducer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RecipesContainer from './ui/container/RecipesContainer';
import RecipeDetailsContainer from './ui/container/RecipeDetailsContainer';
import CookingContainer from './ui/container/CookingContainer';
import ApplicationState from './redux/state/ApplicationState';

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
                <Route exact path="/" component={RecipesContainer} />
                <Route path="/recipeDetails" component={RecipeDetailsContainer} />
                <Route path="/cooking" component={CookingContainer} />
            </Switch>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
