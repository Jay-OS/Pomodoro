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
        border: 0,
        clip: 'rect(0px, 0px, 0px, 0px)',
        clipPath: 'inset(50%)',
        height: '1px',
        margin: '0px -1px -1px 0px',
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap',
    },
    CONTAINER_OVERFLOW: {
        overflowX: 'hidden',
        overfloyY: 'auto',
    },
};

export default utils;
