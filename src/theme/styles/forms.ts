import { styleMapProperties } from './objectMaps';

import colours from './colours';

const forms: styleMapProperties = {
    VALIDATION_ERROR: {
        color: colours.ERROR_COLOUR,
        border: `1px solid ${colours.ERROR_COLOUR}`,
        padding: '0.35rem',
        backgroundColor: colours.ERROR_BACKGROUND,
        boxSizing: 'border-box',
        borderRadius: '5px',
        textAlign: 'center',
    },
    FIELDSET: {
        border: `1px solid ${colours.BORDER_LIGHT}`,
        borderRadius: '5px',
    },
    LEGEND: {
        borderRadius: '5px',
        color: '#FFFFFF',
        backgroundColor: colours.BORDER_LIGHT,
        padding: '0.25rem 0.5rem',
    },
};

export default forms;
