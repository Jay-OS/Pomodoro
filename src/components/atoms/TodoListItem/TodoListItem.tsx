import React from 'react';
import { css } from 'aphrodite/no-important';
import { MdDelete } from 'react-icons/md';
import ControlButton from '../ControlButton';

import { todoItemShape, todoItemTypes } from '../../../domain/entities/todoItems';

import todoListItemStyles from './TodoListItemStyles';

interface ITodoListItem {
    todoItem: todoItemShape;
    remainingTimeMins: number;
    isCurrentItem: boolean;
    id?: string;
    deleteAction?: () => void;
}

const TodoListItem = ({
    todoItem,
    remainingTimeMins,
    isCurrentItem,
    id,
    deleteAction,
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
            {deleteAction && todoItem.itemType === todoItemTypes.POMODORO &&
                <span id={`${id}-delete`}>
                    <ControlButton onClick={deleteAction} aria-label="Delete">
                        <MdDelete />
                    </ControlButton>
                </span>}
        </div>
    );
};

export default TodoListItem;
