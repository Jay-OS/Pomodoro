import React from 'react';

import { todoItemShape } from '../../../entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

interface ITodoListItems {
    listItems: todoItemShape[],
    itemDurations: defaultTimesInMinutesType,
    currentItemIndex: number | undefined,
    currentTimerMs: number,
}

const TodoListItems: React.FC<ITodoListItems> = () => {
  return (
    <>
        TodoListItems
    </>
  );
}

export default TodoListItems;