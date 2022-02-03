import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const modalContainerStyles: styleMapProperties = {
    closeButtonContainer: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-end',
    },
};

export default StyleSheet.create(modalContainerStyles);
