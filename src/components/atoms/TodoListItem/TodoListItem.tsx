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
            <span className={css(todoListItemStyles.taskContainer)} id={`${id}-description`}>
                <h3 className={css(todoListItemStyles.H3)}>{todoItem.title}</h3>
                <p>{todoItem.description}</p>
            </span>
            <span className={css(todoListItemStyles.timeContainer)} id={`${id}-time`}>
                <span className={css(todoListItemStyles.remainingTime)}>{remainingTimeMins}</span>
                <span>mins</span>
            </span>
            <span className={css(todoListItemStyles.deleteContainer)} id={`${id}-delete`}>
            {deleteAction && todoItem.itemType === todoItemTypes.POMODORO &&
                <ControlButton onClick={deleteAction} aria-label="Delete">
                    <MdDelete />
                </ControlButton>}
            </span>
        </div>
    );
};

export default TodoListItem;
