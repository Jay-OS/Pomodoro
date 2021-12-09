import React, { useEffect, useState } from 'react';
import { css } from 'aphrodite/no-important';

import appStyles from './AppStyles';

import Timer from '../../molecules/Timer'
import TodoList from '../../molecules/TodoList'

import defaultTimesInMinutes, { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

import { todoItemShape, createPomodoro, shortBreak, longBreak } from '../../../entities/todoItems';

const App: React.FC<{}> = () => {
  const [todoList, setTodoList] = useState<todoItemShape[]>([]);
  const [todoListWithBreaks, setTodoListWithBreaks] = useState<todoItemShape[]>([]);
  const [currentTodoItemIndex, setCurrentTodoItemIndex] = useState<number | undefined>();
  const [todoListItemDurations, setTodoListItemDurations] = useState<defaultTimesInMinutesType>(defaultTimesInMinutes);

  const createTodoListWithBreaks = () => {
    if (todoList.length < 2) {
      setTodoListWithBreaks(todoList);
      return;
    }

    const newTodoList = [
      ...todoList
    ];
    for (let index = 1; index < newTodoList.length; index += 2) {
      const breakType = index % 8 === 0 ? longBreak : shortBreak;
      newTodoList.splice(index, 0, breakType);
    }

    setTodoListWithBreaks(newTodoList);
  }
  useEffect(createTodoListWithBreaks, [todoList]);

  const addTodoItem = (title: string, description: string) => {
    const pomodoro = createPomodoro(title, description);
    const newTodoList = [
      ...todoList,
      pomodoro
    ];

    setTodoList(newTodoList);

    if (newTodoList.length === 1) {
      setCurrentTodoItemIndex(0);
    }
  }

  return (
    <div className={css(appStyles.panel)}>
      <Timer />
      <TodoList
        listItems={todoListWithBreaks}
        itemDurations={todoListItemDurations}
        currentItemIndex={currentTodoItemIndex}
        currentTimerMs={0}
        addTodoItem={addTodoItem}
      />
    </div>
  );
}

export default App;
