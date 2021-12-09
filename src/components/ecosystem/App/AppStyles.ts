import { StyleSheet } from 'aphrodite/no-important';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

import utils from '../../../theme/styles/utils';
import responsiveBreakpoints from '../../../theme/styles/responsiveBreakpoints';

const appStyles: styleMapProperties = {
    panel: {
        width: '90%',
        height: '95%',
        boxSizing: 'border-box',
        ...utils.CENTER_ELEMENT,
        [responsiveBreakpoints.TABLET.mediaQuery]: {
            width: '85%',
            height: '90%'
        },
        [responsiveBreakpoints.DESKTOP.mediaQuery]: {
            width: '50%',
            height: '80%'
        }
    },
};

export default StyleSheet.create(appStyles);
