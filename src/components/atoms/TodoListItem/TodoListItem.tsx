import React from 'react';
import { css } from 'aphrodite/no-important';

import { todoItemShape } from '../../../domain/entities/todoItems';

import todoListItemStyles from './TodoListItemStyles';

interface ITodoListItem {
    todoItem: todoItemShape;
    remainingTimeMins: number;
    isCurrentItem: boolean;
}

const TodoListItem = ({ todoItem, remainingTimeMins, isCurrentItem }: ITodoListItem) => {
    return (
        <div
            className={css(
                todoListItemStyles.todoListItemContainer,
                todoListItemStyles[todoItem.itemType],
                isCurrentItem && todoListItemStyles.currentItem
            )}
        >
            <span>
                <h3 className={css(todoListItemStyles.H3)}>
                    {todoItem.title}
                </h3>
                <p>{todoItem.description}</p>
            </span>
            <span>
                <span>{remainingTimeMins}</span>
                <span>mins</span>
            </span>
        </div>
    );
};

export default TodoListItem;
