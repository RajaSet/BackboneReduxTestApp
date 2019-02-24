const insertTodo = (state, action) => [...state, {
    id: action.id || uuid(),
    desc: action.value || 'New Task',
    status: false
}];

const deleteTodo = (state, action) => state.filter(todo => todo.id !== action.id);

const updateTodo = (state, action, prop) => state
      .map(todo => todo.id !== action.id ? todo : {
	  ...todo,
	  [prop]: action.value
      });


const initialState = [];


export default function(state = initialState, action) {
    let newState = state;
    switch (action.type) {
    case "TODO_ADD":
	newState = insertTodo(state, action);
	break;
    case "TODO_DELETE":
	newState = deleteTodo(state, action);
	break;
    case "TODO_MODIFY_DESCRIPTION":
	newState = updateTodo(state, action, 'desc');
	break;
    case "TODO_MODIFY_STATUS":
	newState = updateTodo(state, action, 'status');	
	break;

    }
    return newState;
}
