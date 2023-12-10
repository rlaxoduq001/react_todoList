let initialState= {
  todoList : []
};

function reducer(state=initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            text : action.payload.text,
            id : action.payload.id
          }
        ]
      }
      case "UPDATE_TODO_TEXT":
        return {
          ...state,
          todoList: action.payload,
        };

      case 'UPDATE_TODO_TEXT':
        return {
          ...state,
          todoList: action.payload,
        };
      default: 
        return {
          ...state
        }
  }
}



export default reducer;