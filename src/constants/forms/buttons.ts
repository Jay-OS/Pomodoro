interface buttonShape {
    readonly props: {
        readonly id: string;
        readonly name: string;
        readonly type: 'button' | 'reset' | 'submit';
    };
    readonly label: string;
}

export enum buttonTypes {
    ADD_BUTTON = 'ADD_BUTTON',
    SAVE_BUTTON = 'SAVE_BUTTON',
    RESET_BUTTON = 'RESET_BUTTON',
}

export const buttons: { readonly [key in buttonTypes]: buttonShape } = {
    [buttonTypes.ADD_BUTTON]: {
        props: {
            id: 'addButton',
            name: 'addButton',
            type: 'submit',
        },
        label: 'Add',
    },
    [buttonTypes.SAVE_BUTTON]: {
        props: {
            id: 'saveButton',
            name: 'saveButton',
            type: 'submit',
        },
        label: 'Save',
    },
    [buttonTypes.RESET_BUTTON]: {
        props: {
            id: 'resetButton',
            name: 'resetButton',
            type: 'button',
        },
        label: 'Reset',
    },
};
