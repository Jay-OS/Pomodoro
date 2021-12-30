import { TodoItemList } from './todoItemList';
import { todoItemTypes, todoItemShape } from './todoItems';

import {
    PomodoroFormFieldValues,
    PomodoroFormFieldNames,
} from '../../constants/forms/formFields/createPomodoroFormFields';

describe('todoItemList entity . . .', () => {
    const getPomodoroRequests = (number: number): PomodoroFormFieldValues[] => {
        return Array.from({length: number}, (_, i) => {
            return {
                [PomodoroFormFieldNames.POMODORO_TITLE]: `The title for this Pomodoro (${i})`,
                [PomodoroFormFieldNames.POMODORO_DESCRIPTION]: `A good description to go with the title (${i}).`
            };
        });
    }

    const checkPomodoros = (todoItems: todoItemShape[], pomodoroValues: PomodoroFormFieldValues[]) => {
        const pomodoros = todoItems.filter((item) => item.itemType === todoItemTypes.POMODORO);
        pomodoros.forEach((pomodoro, index) => {
            expect(pomodoro.title).toEqual(pomodoroValues[index].pomodoroTitle);
            expect(pomodoro.description).toEqual(pomodoroValues[index].pomodoroDescription);
        });
    };

    it('Returns expected response from getCurrentState for newly created instance', () => {
        const instance = new TodoItemList();
        const currentState = instance.getCurrentState();

        expect(Array.isArray(currentState.list)).toBe(true);
        expect(currentState.list).toHaveLength(0);
        expect(currentState.currentItemIndex).toBeUndefined();
    });

    it('Returns expected response from getCurrentState and add when list has one item', () => {
        const instance = new TodoItemList();
        const pomodoroValues = getPomodoroRequests(1);
        const stateAfterAdd = instance.add(pomodoroValues[0]);
        const currentState = instance.getCurrentState();

        expect(stateAfterAdd).toMatchObject(currentState);

        expect(Array.isArray(currentState.list)).toBe(true);
        expect(currentState.list).toHaveLength(1);
        expect(currentState.currentItemIndex).toEqual(0);

        const pomodoro = currentState.list[0];
        expect(pomodoro.title).toEqual(pomodoroValues[0].pomodoroTitle);
        expect(pomodoro.description).toEqual(pomodoroValues[0].pomodoroDescription);
    });

    it('Returns expected response from getCurrentState and add when list has two items and one break', () => {
        const instance = new TodoItemList();
        const pomodoroValues = getPomodoroRequests(2);
        let stateAfterAdd;
        pomodoroValues.forEach((value) => stateAfterAdd = instance.add(value));
        const currentState = instance.getCurrentState();

        expect(stateAfterAdd).toMatchObject(currentState);

        expect(Array.isArray(currentState.list)).toBe(true);
        expect(currentState.list).toHaveLength(3);
        expect(currentState.currentItemIndex).toEqual(0);

        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.POMODORO)).toHaveLength(2);
        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.SHORT_BREAK)).toHaveLength(1);
        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.LONG_BREAK)).toHaveLength(0);

        checkPomodoros(currentState.list, pomodoroValues);
    });

    it('Returns expected response from getCurrentState and add when list has five items and four breaks', () => {
        const instance = new TodoItemList();
        const pomodoroValues = getPomodoroRequests(5);
        let stateAfterAdd;
        pomodoroValues.forEach((value) => stateAfterAdd = instance.add(value));
        const currentState = instance.getCurrentState();

        expect(stateAfterAdd).toMatchObject(currentState);

        expect(Array.isArray(currentState.list)).toBe(true);
        expect(currentState.list).toHaveLength(9);
        expect(currentState.currentItemIndex).toEqual(0);

        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.POMODORO)).toHaveLength(5);
        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.SHORT_BREAK)).toHaveLength(3);
        expect(currentState.list.filter((item) => item.itemType === todoItemTypes.LONG_BREAK)).toHaveLength(1);

        checkPomodoros(currentState.list, pomodoroValues);
    });
});
