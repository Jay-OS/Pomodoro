import React from 'react';
import { css } from 'aphrodite/no-important';

import { minutesToHoursAndMinutesString } from '../../../utils/time';

import todoListSummaryStyles from './TodoListSummaryStyles';

interface ITodoListSummary {
    todoCount: number;
    completedTodoCount: number;
    totalTimeLeft: number;
    totalTodoTimeLeft: number;
}

const TodoListSummary = ({
    todoCount,
    completedTodoCount,
    totalTimeLeft,
    totalTodoTimeLeft,
}: ITodoListSummary) => {
    return (
        <div
            id="todoListSummary"
            className={css(todoListSummaryStyles.summaryContainer)}
            aria-live="polite"
        >
            <span
                id="todoListSummary-todoCount"
                className={css(todoListSummaryStyles.summaryItem)}
                aria-atomic="true"
            >
                <span>To do items</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {todoCount}
                </span>
            </span>
            <span
                id="todoListSummary-completedTodoCount"
                className={css(todoListSummaryStyles.summaryItem)}
                aria-atomic="true"
            >
                <span>Completed to do items</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {completedTodoCount}
                </span>
            </span>
            <span
                id="todoListSummary-todoTimeLeft"
                className={css(todoListSummaryStyles.summaryItem)}
                aria-atomic="true"
            >
                <span>To do time left</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {minutesToHoursAndMinutesString(totalTodoTimeLeft)}
                </span>
            </span>
            <span
                id="todoListSummary-totalTimeLeft"
                className={css(todoListSummaryStyles.summaryItem)}
                aria-atomic="true"
            >
                <span>Total time left</span>
                <span className={css(todoListSummaryStyles.summaryItemValue)}>
                    {minutesToHoursAndMinutesString(totalTimeLeft)}
                </span>
            </span>
        </div>
    );
};

export default TodoListSummary;
