import { StyleSheet } from 'aphrodite/no-important';

import { todoItemTypes } from '../../../entities/todoItems';

import colours from '../../../theme/styles/colours';
import utils from '../../../theme/styles/utils';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const todoListItemStyles: styleMapProperties = {
    todoListItemContainer: {
        ...utils.CONTAINER_STYLES,
        border: `1px solid ${colours.BORDER_COLOUR}`,
        margin: '0.25rem 0',
    },
    [todoItemTypes.POMODORO]: {
        backgroundColor: colours.POMODORO_BACKGROUND,
    },
    [todoItemTypes.SHORT_BREAK]: {
        backgroundColor: colours.SHORTBREAK_BACKGROUND,
    },
    [todoItemTypes.LONG_BREAK]: {
        backgroundColor: colours.LONGBREAK_BACKGROUND,
    },
};

export default StyleSheet.create(todoListItemStyles);
