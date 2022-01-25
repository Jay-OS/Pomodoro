import React from 'react';

import TodoListItem from '../../atoms/TodoListItem';

import { todoItemShape } from '../../../domain/entities/todoItems';

interface ITodoListItems {
    listItems: todoItemShape[];
}

const TodoListItems = ({ listItems }: ITodoListItems) => {
    return (
        <>
            {!!listItems && listItems.length > 0 ? (
                listItems.map((value, index) => (
                    <TodoListItem id={`todoList-todoListItem${index}`} todoItemIndex={index} key={value.id} />
                ))
            ) : (
                <span id="todoList-noTodos">You haven't planned any 'to do' items yet.</span>
            )}
        </>
    );
};

export default TodoListItems;
