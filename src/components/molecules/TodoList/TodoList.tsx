import React from 'react';

import TodoListItems from '../TodoListItems';
import ITodoItemForm from '../TodoItemForm';
import TodoListSummary from '../../atoms/TodoListSummary';

import { todoItemShape } from '../../../entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

interface ITodoList {
    listItems: todoItemShape[];
    itemDurations: defaultTimesInMinutesType;
    currentItemIndex: number | undefined;
    currentTimerMs: number;
    addTodoItem: (values: any) => void;
}

const TodoList: React.FC<ITodoList> = (props) => {
    return (
        <div>
            <h1>'To do' List</h1>
            <ITodoItemForm addTodoItem={props.addTodoItem} />
            <div>
                <TodoListSummary
                    listItems={props.listItems}
                    itemDurations={props.itemDurations}
                    currentItemIndex={props.currentItemIndex}
                    currentTimerMs={props.currentTimerMs}
                />
                <TodoListItems
                    listItems={props.listItems}
                    itemDurations={props.itemDurations}
                    currentItemIndex={props.currentItemIndex}
                    currentTimerMs={props.currentTimerMs}
                />
            </div>
        </div>
    );
};

export default TodoList;
