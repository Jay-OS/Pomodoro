import React from 'react';


interface ITodoItemForm {
    addTodoItem: (title: string, description: string) => void
}

const TodoItemForm: React.FC<ITodoItemForm> = (props) => {
  return (
    <div>
        TodoItemForm
    </div>
  );
}

export default TodoItemForm;
