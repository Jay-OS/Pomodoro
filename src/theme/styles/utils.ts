import { styleMapProperties } from './objectMaps';

const utils: styleMapProperties = {
    CENTER_ELEMENT: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    CONTAINER_STYLES: {
        borderRadius: '10px',
        padding: '1rem',
    },
    NO_WRAP: {
        whiteSpace: 'nowrap',
    },
    HIDDEN: {
        position: 'absolute',
        top: '-9999px',
        left: '-9999px',
    },
    CONTAINER_OVERFLOW: {
        overflowX: 'hidden',
        overfloyY: 'auto',
    },
};

export default utils;
