import React from 'react';

import { todoItemShape } from '../entities/todoItems';
import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../constants/defaultTimesInMinutes';
import { ITimerState } from '../entities/timer';

export interface IAppState {
    todoList: {
        original: todoItemShape[],
        withBreaks: todoItemShape[],
        currentItemIndex: number | undefined,
        addItem: (values: any) => void,
        itemDurationsMins: defaultTimesInMinutesType,
        setDurations: (value: defaultTimesInMinutesType) => void,
    },
    currentTimer: ITimerState,
};

const AppStateContext = React.createContext<IAppState>(
    {
        todoList: {
            original: [],
            withBreaks: [],
            currentItemIndex: 0,
            addItem: (values: any) => {},
            itemDurationsMins: defaultTimesInMinutes,
            setDurations: (value: defaultTimesInMinutesType) => {},
        },
        currentTimer: {
            ellapsedMS: 0,
            totalTimeMS: 0,
            endTimeMS: 0,
            isPaused: false,
            hasEnded: false,
        },
    }
);

export default AppStateContext;
