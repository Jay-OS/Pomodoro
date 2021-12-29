import {
    todoItemShape,
    shortBreak,
    longBreak,
    createPomodoro,
} from './todoItems';

import {
    PomodoroFormFieldValues,
    PomodoroFormFieldNames,
} from '../../constants/forms/formFields/createPomodoroFormFields';

export interface ICurrentTodoListState {
    list: todoItemShape[];
    currentItemIndex: number | undefined;
}

export class TodoItemList {
    private list: todoItemShape[] = [];
    private currentItemIndex: number | undefined = undefined;

    add(values: PomodoroFormFieldValues) {
        const thisTodoList = this;

        const pomodoro = createPomodoro(
            values[PomodoroFormFieldNames.POMODORO_TITLE],
            values[PomodoroFormFieldNames.POMODORO_DESCRIPTION]
        );
        thisTodoList.list.push(pomodoro);

        if (thisTodoList.list.length === 1) {
            thisTodoList.currentItemIndex = 0;
        }

        return thisTodoList.getCurrentState();
    }

    private getTodoListWithBreaks = () => {
        const thisTodoList = this;

        if (thisTodoList.list.length < 2) {
            return thisTodoList.list;
        }

        const getBreak = (index: number) => {
            return (index + 1) % 8 === 0 ? { ...longBreak } : { ...shortBreak };
        };

        const newTodoList = [...thisTodoList.list];
        for (let index = 1; index < newTodoList.length; index += 2) {
            const breakObject = getBreak(index);
            breakObject.id = `${newTodoList[index - 1].id}_break`;
            newTodoList.splice(index, 0, breakObject);
        }

        return newTodoList;
    };

    getCurrentState() {
        const currentState: ICurrentTodoListState = {
            list: this.getTodoListWithBreaks(),
            currentItemIndex: this.currentItemIndex,
        };
        return currentState;
    }
}

const exports: { instance: TodoItemList | null } = {
    instance: null,
};

export default exports;
