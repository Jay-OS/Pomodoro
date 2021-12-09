import { todoItemTypes } from '../entities/todoItems'

const defaultTimesInMinutes: { readonly [key in todoItemTypes]: number } = {
    POMODORO: 25,
    SHORT_BREAK: 10,
    LONG_BREAK: 30
};

export default  defaultTimesInMinutes;
