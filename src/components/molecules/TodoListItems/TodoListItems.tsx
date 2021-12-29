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
                    <TodoListItem
                        todoItemIndex={index}
                        key={value.id}
                    />
                ))
            ) : (
                <span>You haven't planned any 'to do' items yet.</span>
            )}
        </>
    );
};

export default TodoListItems;
