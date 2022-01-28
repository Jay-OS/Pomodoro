import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import utils from '../../../theme/styles/utils';

const todoListStyles: styleMapProperties = {
    todoSectionContainer: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1 1 auto',
    },
    todoListContainer: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1 1 auto',
    },
    hidden: {
        ...utils.HIDDEN,
    },
};

export default StyleSheet.create(todoListStyles);
