import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const controlButtonStyles: styleMapProperties = {
    controlButton: {
        height: '1.7rem',
        width: '1.7rem',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '1rem',
        lineHeight: '1rem',
        padding: '0',
        transition: 'background-color 0.3s linear, color 0.3s linear',
        ':hover': {
            backgroundColor: colours.BRAND_MAIN,
            color: 'white',
        },
    },
}

export default StyleSheet.create(controlButtonStyles);
