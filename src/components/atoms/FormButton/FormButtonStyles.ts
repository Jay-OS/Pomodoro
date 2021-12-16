import { StyleSheet, CSSProperties } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import { buttonTypes } from '../../../constants/forms/buttons';

const CtaStyle: CSSProperties = {
    'color': '#FFFFFF',
    'backgroundColor': colours.BRAND_MAIN,
    ':disabled': {
        color: '#bac4d4',
        backgroundColor: colours.BRAND_SECONDARY,
    },
    ':hover': {
        backgroundColor: colours.BRAND_MAIN,
    },
};

const formButtonStyles: styleMapProperties = {
    button: {
        border: 'none',
        borderRadius: '5px',
        padding: '0.75rem 1rem',
        transition: 'background-color 0.3s linear',
    },
    [buttonTypes.ADD_BUTTON]: CtaStyle,
    [buttonTypes.SAVE_BUTTON]: CtaStyle,
    [buttonTypes.RESET_BUTTON]: {
        'color': '#FFFFFF',
        'backgroundColor': '#717275',
        ':hover': {
            backgroundColor: '#515257',
        },
    },
};

export default StyleSheet.create(formButtonStyles);
