import React from 'react';
import { css } from 'aphrodite/no-important';

import { todoItemShape } from '../../../domain/entities/todoItems';

import todoListItemStyles from './TodoListItemStyles';

interface ITodoListItem {
    todoItem: todoItemShape;
    remainingTimeMins: number;
    isCurrentItem: boolean;
    id?: string;
}

const TodoListItem = ({
    todoItem,
    remainingTimeMins,
    isCurrentItem,
    id,
}: ITodoListItem) => {
    return (
        <div
            className={css(
                todoListItemStyles.todoListItemContainer,
                todoListItemStyles[todoItem.itemType],
                isCurrentItem && todoListItemStyles.currentItem
            )}
            id={id}
        >
            <span id={`${id}-description`}>
                <h3 className={css(todoListItemStyles.H3)}>{todoItem.title}</h3>
                <p>{todoItem.description}</p>
            </span>
            <span id={`${id}-time`}>
                <span>{remainingTimeMins}</span>
                <span>mins</span>
            </span>
        </div>
    );
};

export default TodoListItem;
