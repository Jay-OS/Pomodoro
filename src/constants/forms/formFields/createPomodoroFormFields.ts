import { formFieldShape } from './formFieldShape';

import * as Yup from 'yup';

export enum PomodoroFormFieldNames {
    POMODORO_TITLE = 'pomodoroTitle',
    POMODORO_DESCRIPTION = 'pomodoroDescription',
};

export interface PomodoroFormFieldValues {
    [PomodoroFormFieldNames.POMODORO_TITLE]: string,
    [PomodoroFormFieldNames.POMODORO_DESCRIPTION]: string
}

const createPomodoroFormFields: { readonly [type: string]: formFieldShape } = {
    title: {
        props: {
            name: PomodoroFormFieldNames.POMODORO_TITLE,
            id: PomodoroFormFieldNames.POMODORO_TITLE,
            placeholder: 'A short description of your task',
            type: 'text',
            label: 'Title',
        },
        validation: Yup.string()
            .required('Please enter a descriptive title (min. 10 characters)')
            .min(10, 'Please enter a descriptive title (min. 10 characters)')
            .max(50, 'Please be concise (max. 50 characters)'),
    },
    description: {
        props: {
            name: PomodoroFormFieldNames.POMODORO_DESCRIPTION,
            id: PomodoroFormFieldNames.POMODORO_DESCRIPTION,
            placeholder: 'A full description of your task',
            type: 'text',
            label: 'Description',
        },
        validation: Yup.string()
            .required('Please enter a full description (min. 20 characters)')
            .min(20, 'Please enter a full description (min. 20 characters)')
            .max(150, 'Please be concise (max. 150 characters)'),
    },
};

export default createPomodoroFormFields;
