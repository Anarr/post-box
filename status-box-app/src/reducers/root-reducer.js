import { combineReducers } from 'redux';
import ColorReducer from './color-reducer';
import ActiveColorReducer from './active-color-reducer';
import FocusedReducer from './focused-reducers';

const allReducer = combineReducers({
    colors:ColorReducer,
    activeColor:ActiveColorReducer,
    commentBox:FocusedReducer
});

export default allReducer;