import { styleMapProperties } from './objectMaps';

import fontFaces from './fontFaces';

const globalStyles: styleMapProperties = {
    H2: {
        fontFamily: [fontFaces.openSansBold, 'sans-serif'],
        margin: '0 0 0.5rem',
        fontSize: '1.25rem',
    },
    H3: {
        fontFamily: [fontFaces.openSansBold, 'sans-serif'],
        margin: '0 0 0.5rem',
        fontSize: '1.1rem',
    },
};

export default globalStyles;
