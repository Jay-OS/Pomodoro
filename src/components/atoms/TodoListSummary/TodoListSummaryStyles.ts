import { StyleSheet } from 'aphrodite/no-important';

import colours from '../../../theme/styles/colours';

import { styleMapProperties } from '../../../theme/styles/objectMaps';

const todoListSummaryStyles: styleMapProperties = {
    summaryContainer: {
        margin: '1rem 0 0.5rem',
        padding: '0 0 0.5rem',
        borderBottom: `2px solid ${colours.BORDER_COLOUR}`,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        columnGap: '2%',
        alignItems: 'center',
    },
    summaryItem: {
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        flex: 1,
        textAlign: 'center',
    },
    summaryItemValue: {
        fontWeight: 'bold',
    }
};

export default StyleSheet.create(todoListSummaryStyles);
