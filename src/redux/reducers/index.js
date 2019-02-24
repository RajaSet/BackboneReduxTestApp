import todoReducer from './todo/index.js';

export default Redux.combineReducers({
    todo: todoReducer
});
