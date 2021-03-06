import React, { useEffect, useState } from 'react';

import TodoListStateContext, {
    ITodoListState,
} from '../../../domain/contexts/todoListState';
import todoItemList, {
    TodoItemList,
    ICurrentTodoListState,
} from '../../../domain/entities/todoItemList';

import defaultTimesInMinutes, {
    defaultTimesInMinutesType,
} from '../../../constants/defaultTimesInMinutes';

import { PomodoroFormFieldValues } from '../../../constants/forms/formFields/createPomodoroFormFields';

interface ITodoListStateComponent {
    createTimer: (durationMinutes: number) => void;
    clearTimer: () => void;
}

const TodoListState: React.FC<ITodoListStateComponent> = ({
    children,
    createTimer,
    clearTimer,
}) => {
    const [todoListState, setTodoListState] = useState<ICurrentTodoListState>({
        list: [],
        currentItemIndex: undefined,
    });
    const [todoListItemDurations, setTodoListItemDurations] =
        useState<defaultTimesInMinutesType>(defaultTimesInMinutes);

    useEffect(() => {
        todoItemList.instance = new TodoItemList();
        setTodoListState(todoItemList.instance.getCurrentState());
    }, []);

    const addTodoItem = (values: PomodoroFormFieldValues) => {
        if (!todoItemList.instance) {
            todoItemList.instance = new TodoItemList();
        }
        const newState = todoItemList.instance.add(values);

        if (newState.list.length === 1) {
            const timerDurationMins =
                todoListItemDurations[newState.list[0].itemType];
            createTimer(timerDurationMins);
        }

        setTodoListState(newState);
    };

    const deleteTodoItem = (id?: string) => {
        if (!todoItemList.instance) {
            return;
        }
        const newState = todoItemList.instance.delete(id);

        if (newState.currentItemIndex === undefined) {
            clearTimer();
        }

        setTodoListState(newState);
    }

    const currentTodoListState: ITodoListState = {
        currentListState: todoListState,
        addItem: addTodoItem,
        deleteItem: deleteTodoItem,
        itemDurationsMins: todoListItemDurations,
        setDurations: setTodoListItemDurations,
    };

    return (
        <TodoListStateContext.Provider value={currentTodoListState}>
            {children}
        </TodoListStateContext.Provider>
    );
};

export default TodoListState;
