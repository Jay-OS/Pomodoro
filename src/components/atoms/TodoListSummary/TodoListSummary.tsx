import React from 'react';

import { todoItemShape } from '../../../entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

interface ITodoListSummary {
    listItems: todoItemShape[],
    itemDurations: defaultTimesInMinutesType,
    currentItemIndex: number | undefined,
    currentTimerMs: number,
}

const TodoListSummary: React.FC<ITodoListSummary> = () => {
  return (
    <div>
        TodoListSummary
    </div>
  );
}

export default TodoListSummary;
