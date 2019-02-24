import ReduxStore from './redux/store.js';
import TodoContainer from './backbone/todo.js';


var app = new TodoContainer({
    el: $('body')
});

ReduxStore.subscribe(() => app.setProps(ReduxStore.getState().todo));

app.setProps(ReduxStore.getState().todo);

window.ReduxStore = ReduxStore;
window.TodoContainer = TodoContainer;
window.app = app;

console.log('app.js module loaded');
