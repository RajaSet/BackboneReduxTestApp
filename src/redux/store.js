import reducers from './reducers/index.js';

const ReduxStore = Redux.createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default ReduxStore;
