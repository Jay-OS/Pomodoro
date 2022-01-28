import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const todoListItemsStyles: styleMapProperties = {
    todoListItemsContainer: {
        padding: '0 0.5rem',
        overflowY: 'auto',
        flex: '1 1 auto',
    },
};

export default StyleSheet.create(todoListItemsStyles);
