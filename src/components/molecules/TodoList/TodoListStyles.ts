import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import utils from '../../../theme/styles/utils';

const todoListStyles: styleMapProperties = {
    hidden: {
        ...utils.HIDDEN,
    },
};

export default StyleSheet.create(todoListStyles);
