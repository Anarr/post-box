import { combineReducers } from 'redux';
import ColorReducer from './color-reducer';
import ActiveColorReducer from './active-color-reducer';

const allReducer = combineReducers({
    colors:ColorReducer,
    activeColor:ActiveColorReducer
});

export default allReducer;