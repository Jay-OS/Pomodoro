import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const timerStyles: styleMapProperties = {
    timerContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    timerContainerItem: {
        margin: '0 0 0.5rem',
        textAlign: 'center',
    },
    timerDisplay: {
        fontSize: '1.5rem',
    },
    timerDisplayValues: {
        fontSize: '3rem',
        margin: '0 0.25rem 0 0'
    },
};

export default StyleSheet.create(timerStyles);
