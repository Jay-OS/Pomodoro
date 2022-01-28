import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import utils from '../../../theme/styles/utils';

const timerStyles: styleMapProperties = {
    timerContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '1.5rem 0',
        flex: '0 1 auto',
    },
    timerContainerItem: {
        margin: '0 0 0.5rem',
        textAlign: 'center',
    },
    timerDisplay: {
        fontSize: '1.8rem',
    },
    timerDisplayValues: {
        fontSize: '3.5rem',
        margin: '0 0.25rem 0 0',
    },
    hidden: {
        ...utils.HIDDEN,
    },
};

export default StyleSheet.create(timerStyles);
