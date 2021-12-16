export enum todoItemTypes {
    POMODORO = 'POMODORO',
    SHORT_BREAK = 'SHORT_BREAK',
    LONG_BREAK = 'LONG_BREAK',
}
export interface todoItemShape {
    itemType: todoItemTypes;
    title: string;
    description: string;
    isComplete: boolean;
}

export const shortBreak: todoItemShape = {
    itemType: todoItemTypes.SHORT_BREAK,
    title: 'Short break',
    description: 'Take a short break before starting the next pomodoro.',
    isComplete: false,
};

export const longBreak: todoItemShape = {
    itemType: todoItemTypes.LONG_BREAK,
    title: 'Long break',
    description:
        'Good work so far. Take a good break before starting your next pomodoro.',
    isComplete: false,
};

export const createPomodoro = (
    title: string,
    description: string
): todoItemShape => ({
    itemType: todoItemTypes.POMODORO,
    title: title,
    description: description,
    isComplete: false,
});
