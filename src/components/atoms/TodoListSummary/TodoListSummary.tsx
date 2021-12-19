import React from 'react';
import { css } from 'aphrodite/no-important';

import { minutesToHoursAndMinutesString } from '../../../utils/time';

import { todoItemShape, todoItemTypes } from '../../../domain/entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

import todoListSummaryStyles from './TodoListSummaryStyles';

interface ITodoListSummary {
    listItems: todoItemShape[];
    itemDurations: defaultTimesInMinutesType;
    currentItemIndex: number | undefined;
    currentTimerMs: number;
}

const TodoListSummary = (props: ITodoListSummary) => {
    const { listItems, itemDurations } = props;

    const todoCount = listItems.filter(
        (value) => value.itemType === todoItemTypes.POMODORO
    ).length;
    const completedTodoCount = listItems.filter(
        (value) =>
            value.itemType === todoItemTypes.POMODORO &&
            value.isComplete === true
    ).length;

    const totalTimeLeft = listItems
        .filter((value) => value.isComplete === false)
        .reduce(
            (partialSum, item) => partialSum + itemDurations[item.itemType],
            0
        );
    const totalTodoTimeLeft = listItems
        .filter(
            (value) =>
                value.itemType === todoItemTypes.POMODORO &&
                value.isComplete === false
        )
        .reduce(
            (partialSum, item) => partialSum + itemDurations[item.itemType],
            0
        );

    return (
        <div className={css(todoListSummaryStyles.summaryContainer)}>
            <span className={css(todoListSummaryStyles.summaryItem)}>
                <span>To do items</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {todoCount}
                </span>
            </span>
            <span className={css(todoListSummaryStyles.summaryItem)}>
                <span>Completed to do items</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {completedTodoCount}
                </span>
            </span>
            <span className={css(todoListSummaryStyles.summaryItem)}>
                <span>To do time left</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {minutesToHoursAndMinutesString(totalTodoTimeLeft)}
                </span>
            </span>
            <span className={css(todoListSummaryStyles.summaryItem)}>
                <span>Total time left</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {minutesToHoursAndMinutesString(totalTimeLeft)}
                </span>
            </span>
        </div>
    );
};

export default TodoListSummary;
