import React, { useEffect, useState } from 'react';

import AppStateContext, { IAppState } from '../../../domain/contexts/appState';
import timer, { Timer, ITimerState } from '../../../domain/entities/timer';

import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../../constants/defaultTimesInMinutes';

import { PomodoroFormFieldValues, PomodoroFormFieldNames } from '../../../constants/forms/formFields/createPomodoroFormFields';

import { todoItemShape, createPomodoro } from '../../../domain/entities/todoItems';

import { getTodoListWithBreaks } from '../../../domain/entities/helpers/todoItemHelpers';

const AppState: React.FC<{}> = ({ children }) => {
    const [todoList, setTodoList] = useState<todoItemShape[]>([]);
    const [todoListWithBreaks, setTodoListWithBreaks] =
        useState<todoItemShape[]>([]);
    const [currentTodoItemIndex, setCurrentTodoItemIndex] =
        useState<number | undefined>();

    const [todoListItemDurations, setTodoListItemDurations] =
        useState<defaultTimesInMinutesType>(defaultTimesInMinutes);
    const [currentTimerState, setCurrentTimerState] =
        useState<ITimerState>(
            {
                ellapsedMS: 0,
                totalTimeMS: 0,
                endTimeMS: 0,
                isPaused: false,
                hasEnded: false,
            }
        );

    const createTodoListWithBreaks = () => {
        const newTodoList = getTodoListWithBreaks(todoList);
        setTodoListWithBreaks(newTodoList);
    };
    useEffect(createTodoListWithBreaks, [todoList]);

    const addTodoItem = (values: PomodoroFormFieldValues) => {
        const pomodoro = createPomodoro(
            values[PomodoroFormFieldNames.POMODORO_TITLE],
            values[PomodoroFormFieldNames.POMODORO_DESCRIPTION]
        );
        const newTodoList = [...todoList, pomodoro];

        setTodoList(newTodoList);

        if (newTodoList.length === 1) {
            setCurrentTodoItemIndex(0);
            const timerDurationMins = todoListItemDurations[newTodoList[0].itemType];
            timer.instance = new Timer(timerDurationMins);
            setCurrentTimerState(timer.instance.getCurrentState());
        }
    };

    const applicationState: IAppState = {
        todoList: {
            original: todoList,
            withBreaks: todoListWithBreaks,
            currentItemIndex: currentTodoItemIndex,
            addItem: addTodoItem,
            itemDurationsMins: todoListItemDurations,
            setDurations: setTodoListItemDurations,
        },
        currentTimer: currentTimerState,
    };

    return <AppStateContext.Provider value={applicationState}>
        {children}
    </AppStateContext.Provider>;
};

export default AppState;
