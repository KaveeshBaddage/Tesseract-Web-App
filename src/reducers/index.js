import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';
import login from './login';
import session from './session';
import text from './text';

const reducers = combineReducers({
    form:formReducer,
    login:login,
    session:session,
    text:text
});

export default reducers;