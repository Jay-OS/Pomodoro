import { todoItemTypes } from '../entities/todoItems';

export type defaultTimesInMinutesType = {
    [key in todoItemTypes]: number;
};

const defaultTimesInMinutes: defaultTimesInMinutesType = {
    [todoItemTypes.POMODORO]: 25,
    [todoItemTypes.SHORT_BREAK]: 10,
    [todoItemTypes.LONG_BREAK]: 30,
};

export default defaultTimesInMinutes;
