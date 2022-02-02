import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';
import forms from '../../../theme/styles/forms';
import responsiveBreakpoints from '../../../theme/styles/responsiveBreakpoints';
import utils from '../../../theme/styles/utils';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const textInputStyles: styleMapProperties = {
    container: {
        margin: '0 0 1rem',
    },
    inputContainer: {
        [responsiveBreakpoints.TABLET.mediaQuery]: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
    },
    label: {
        display: 'block',
        width: '100%',
        fontWeight: 'bold',
        [responsiveBreakpoints.TABLET.mediaQuery]: {
            display: 'flex',
            width: '20%',
        },
    },
    input: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '0.75rem 0.35rem',
        margin: '0.25rem 0',
        borderRadius: '7px',
        border: `1px solid ${colours.BORDER_COLOUR}`,
        [responsiveBreakpoints.TABLET.mediaQuery]: {
            display: 'flex',
            width: '80%',
            margin: '0.15rem 0 0',
            padding: '0.5rem',
        },
    },
    invalidInput: {
        borderColor: colours.ERROR_COLOUR,
    },
    validationError: {
        display: 'block',
        width: '100%',
        ...forms.VALIDATION_ERROR,
    },
    hidden: {
        ...utils.HIDDEN,
    },
};

export default StyleSheet.create(textInputStyles);
