import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import colours from '../../../theme/styles/colours';
import utils from '../../../theme/styles/utils';

const todoItemFormStyles: styleMapProperties = {
    todoFormContainer: {
        ...utils.CONTAINER_STYLES,
        backgroundColor: colours.GREY_BACKGROUND,
    },
};

export default StyleSheet.create(todoItemFormStyles);
