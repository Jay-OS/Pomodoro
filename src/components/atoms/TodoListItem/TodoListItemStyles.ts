import { StyleSheet } from 'aphrodite/no-important';

import { todoItemTypes } from '../../../domain/entities/todoItems';

import globalStyles from '../../../theme/styles/globalStyles';
import colours from '../../../theme/styles/colours';
import utils from '../../../theme/styles/utils';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const todoListItemStyles: styleMapProperties = {
    todoListItemContainer: {
        ...utils.CONTAINER_STYLES,
        border: 'none',
        margin: '0.25rem 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    [todoItemTypes.POMODORO]: {
        backgroundColor: colours.POMODORO_BACKGROUND,
        color: colours.POMODORO_COLOUR,
    },
    [todoItemTypes.SHORT_BREAK]: {
        backgroundColor: colours.SHORTBREAK_BACKGROUND,
        color: colours.SHORTBREAK_COLOUR,
    },
    [todoItemTypes.LONG_BREAK]: {
        backgroundColor: colours.LONGBREAK_BACKGROUND,
        color: colours.LONGBREAK_COLOUR,
    },
    H3: globalStyles.H3,
    currentItem: {},
    taskContainer: {
        flexGrow: 1,
    },
    timeContainer: {
        flexBasis: '4rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
    },
    deleteContainer: {
        flexBasis: '2rem',
    },
    remainingTime: {
        fontSize: '1.5rem',
    },
};

export default StyleSheet.create(todoListItemStyles);
