import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import globalStyles from '../../../theme/styles/globalStyles';
import colours from '../../../theme/styles/colours';
import utils from '../../../theme/styles/utils';

const todoItemFormStyles: styleMapProperties = {
    todoFormContainer: {
        ...utils.CONTAINER_STYLES,
        backgroundColor: colours.GREY_BACKGROUND,
        marginBottom: '0.5rem',
    },
    heading: globalStyles.H2,
    successIcon: {
        fontSize: '2.5rem',
        lineHeight: '2.5rem',
        marginRight: '0.5rem',
        color: '#2E973A',
        transition: 'opacity .25s ease-in-out',
        opacity: 0,
    },
    successIconVisible: {
        opacity: 1,
    },
    submitArea: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
};

export default StyleSheet.create(todoItemFormStyles);
