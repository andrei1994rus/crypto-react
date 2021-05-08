import {combineReducers,createStore,applyMiddleware} from 'redux';
import themeReducer from './themeReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer=combineReducers(
{
    theme_redux:themeReducer
});

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));