import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import globalStyles from '../../../theme/styles/globalStyles';
import colours from '../../../theme/styles/colours';
import utils from '../../../theme/styles/utils';

const todoItemFormStyles: styleMapProperties = {
    todoFormContainer: {
        ...utils.CONTAINER_STYLES,
        backgroundColor: colours.GREY_BACKGROUND,
    },
    H2: globalStyles.H2,
};

export default StyleSheet.create(todoItemFormStyles);
