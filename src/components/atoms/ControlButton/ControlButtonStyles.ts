import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';
import { controlButtonType, controlButtonSize } from './ControlButtonEnums';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const controlButtonStyles: styleMapProperties = {
    controlButton: {
        borderRadius: '50%',
        border: 'none',
        padding: '0',
        transition: 'background-color 0.3s linear, color 0.3s linear',
        textAlign: 'center',
        ':hover': {
            backgroundColor: colours.BRAND_MAIN,
            color: 'white',
        },
    },
    [controlButtonType.PRIMARY]: {
        backgroundColor: colours.BRAND_MAIN,
        color: 'white',
    },
    [controlButtonType.SECONDARY]: {
        backgroundColor: colours.BRAND_SECONDARY,
        color: 'white',
    },
    [controlButtonType.REVERSED]: {
        backgroundColor: 'white',
        color: 'black',
    },
    [controlButtonSize.LARGE]: {
        height: '2.7rem',
        width: '2.7rem',
        fontSize: '1.8rem',
        lineHeight: '1.8rem',
    },
    [controlButtonSize.MEDIUM]: {
        height: '1.8rem',
        width: '1.8rem',
        fontSize: '1rem',
        lineHeight: '1rem',
    },
    [controlButtonSize.SMALL]: {
        height: '1.2rem',
        width: '1.2rem',
        fontSize: '0.8rem',
        lineHeight: '0.8rem',
    },
    verticalCenter: {
        verticalAlign: 'middle',
    },
};

export default StyleSheet.create(controlButtonStyles);
