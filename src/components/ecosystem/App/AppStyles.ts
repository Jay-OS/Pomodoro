import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import utils from '../../../theme/styles/utils';
import colours from '../../../theme/styles/colours';
import responsiveBreakpoints from '../../../theme/styles/responsiveBreakpoints';
import fontFaces from '../../../theme/styles/fontFaces';

const appStyles: styleMapProperties = {
    panel: {
        width: '90%',
        height: '95%',
        boxSizing: 'border-box',
        ...utils.CENTER_ELEMENT,
        fontFamily: [fontFaces.openSansRegular, 'sans-serif'],
        color: colours.BRAND_SECONDARY,
        [responsiveBreakpoints.TABLET.mediaQuery]: {
            width: '85%',
            height: '90%',
        },
        [responsiveBreakpoints.DESKTOP.mediaQuery]: {
            width: '50%',
        },
    },
};

export default StyleSheet.create(appStyles);
