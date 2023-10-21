interface InitialStateProps {
  todos: Array<any>;
}
export const initialState: InitialStateProps = {
  todos: [],
};
export function todosReducer(state: any, action: any) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: action.id,
            name: action.name,
          },
        ],
      };
    case 'EDIT_TODO':
      return {
        ...state,
        todos: state.todos.map((todo: any) => {
          if (todo.id === action.id) {
            todo.name = action.name;
          }
          return todo;
        }),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo: any) => todo.id !== action.id),
      };
  }
  return initialState;
}
