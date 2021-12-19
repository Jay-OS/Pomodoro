import React from 'react';

import TodoListItem from '../../atoms/TodoListItem';

import { todoItemShape } from '../../../domain/entities/todoItems';

interface ITodoListItems {
    listItems: todoItemShape[];
    currentItemIndex: number | undefined;
}

const TodoListItems = ({ listItems, currentItemIndex }: ITodoListItems) => {
    return (
        <>
            {!!listItems && listItems.length > 0 ? (
                listItems.map((value, index) => (
                    <TodoListItem
                        todoItem={value}
                        isCurrentItem={index === currentItemIndex}
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
