import React from 'react';

import { ICurrentTodoListState } from '../entities/todoItemList';

import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../constants/defaultTimesInMinutes';

export interface ITodoListState {
    currentListState: ICurrentTodoListState;
    addItem: (values: any) => void;
    deleteItem: (id?: string) => void;
    itemDurationsMins: defaultTimesInMinutesType;
    setDurations: (value: defaultTimesInMinutesType) => void;
}

const TodoListStateContext = React.createContext<ITodoListState>({
    currentListState: {
        list: [],
        currentItemIndex: undefined,
    },
    addItem: (values: any) => {},
    deleteItem: (id?: string) => {},
    itemDurationsMins: defaultTimesInMinutes,
    setDurations: (value: defaultTimesInMinutesType) => {},
});

export default TodoListStateContext;
