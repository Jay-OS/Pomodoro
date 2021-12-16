import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const siteHeaderStyles: styleMapProperties = {
    siteHeader: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        width: '100%',
        columnGap: '5%',
        alignItems: 'center',
        paddingBottom: '0.5rem',
        marginBottom: '1rem',
        borderBottom: `2px solid ${colours.BRAND_MAIN}`,
        borderRadius: '2px',
    },
    siteHeaderColumn: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 1,
    },
    credit: {
        textAlign: 'right',
        color: colours.BRAND_SECONDARY
    }
};

export default StyleSheet.create(siteHeaderStyles);
