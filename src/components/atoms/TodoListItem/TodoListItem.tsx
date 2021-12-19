import React from 'react';
import { css } from 'aphrodite/no-important';

import { todoItemShape } from '../../../domain/entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

import todoListItemStyles from './TodoListItemStyles';

interface ITodoListItem {
    todoItem: todoItemShape;
    itemDurations: defaultTimesInMinutesType;
    isCurrentItem: boolean;
    currentTimerMs: number;
}

const TodoListItem = (props: ITodoListItem) => {
    return (
        <div
            className={css(
                todoListItemStyles.todoListItemContainer,
                todoListItemStyles[props.todoItem.itemType]
            )}
        >
            <span>
                <h3 className={css(todoListItemStyles.H3)}>{props.todoItem.title}</h3>
                <p>{props.todoItem.description}</p>
            </span>
            <span><span>{props.itemDurations[props.todoItem.itemType]}</span><span>mins</span></span>
        </div>
    );
};

export default TodoListItem;
