import React from 'react';

import { todoItemShape } from '../entities/todoItems';
import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../constants/defaultTimesInMinutes';

export interface ITodoListState {
    original: todoItemShape[];
    withBreaks: todoItemShape[];
    currentItemIndex: number | undefined;
    addItem: (values: any) => void;
    itemDurationsMins: defaultTimesInMinutesType;
    setDurations: (value: defaultTimesInMinutesType) => void;
};

const TodoListStateContext = React.createContext<ITodoListState>(
    {
        original: [],
        withBreaks: [],
        currentItemIndex: 0,
        addItem: (values: any) => {},
        itemDurationsMins: defaultTimesInMinutes,
        setDurations: (value: defaultTimesInMinutesType) => {},
    }
);

export default TodoListStateContext;
