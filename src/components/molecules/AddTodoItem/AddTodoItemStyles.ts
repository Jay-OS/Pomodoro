import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const addTodoItemStyles: styleMapProperties = {
    addTodoContainer: {
        padding: '0.5rem 0 0',
        flex: '0 1 auto',
    },
    addTodoButton: {
        border: 'none',
        borderRadius: '5px',
        padding: '0.75rem 1rem',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        transition: 'background-color 0.3s linear',
        color: '#FFFFFF',
        backgroundColor: colours.BRAND_MAIN,
        ':disabled': {
            color: '#bac4d4',
            backgroundColor: colours.BRAND_SECONDARY,
        },
        ':hover': {
            backgroundColor: colours.BRAND_MAIN,
        },
    },
    addTodoButtonIcon: {
        fontSize: '1.5rem',
    },
    addTodoButtonText: {
        lineHeight: '1.5rem',
        marginLeft: '0.5rem',
    },
};

export default StyleSheet.create(addTodoItemStyles);
