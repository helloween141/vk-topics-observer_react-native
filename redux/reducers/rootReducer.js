import { combineReducers } from 'redux';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import loaderReducer from './loaderReducer';
import messagesReducer from './messagesReducer';
import topicsReducer from './topicsReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    loader: loaderReducer,
    messages: messagesReducer,
    topics: topicsReducer,
    settings: settingsReducer
})

export default rootReducer