import React from 'react';
import { css } from 'aphrodite/no-important';

import TodoListItem from '../../atoms/TodoListItem';

import todoListItemsStyles from './TodoListItemsStyles';

import { todoItemShape } from '../../../domain/entities/todoItems';

interface ITodoListItems {
    listItems: todoItemShape[];
}

const TodoListItems = ({ listItems }: ITodoListItems) => {
    return (
        <div
            className={css(todoListItemsStyles.todoListItemsContainer)}
            id="todoList-items"
        >
            {!!listItems && listItems.length > 0 ? (
                listItems.map((value, index) => (
                    <TodoListItem
                        id={`todoList-todoListItem${index}`}
                        todoItemIndex={index}
                        key={value.id}
                    />
                ))
            ) : (
                <p id="todoList-noTodos">
                    You haven't planned any 'to do' items yet.
                </p>
            )}
        </div>
    );
};

export default TodoListItems;
