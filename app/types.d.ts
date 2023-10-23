export interface TodoProps {
  type: string;
  id: string;
  name: string;
}

export interface TodoItemProps {
  todo: TodoProps;
  dispatch: any;
}
