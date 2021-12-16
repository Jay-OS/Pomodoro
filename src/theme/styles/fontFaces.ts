import { fontFaceProperties } from './objectMaps';

const fontFaces: fontFaceProperties = {
    openSansBold: {
        fontFamily: 'open_sansbold',
        src: "url('opensans-bold.woff2') format('woff2'), url('opensans-bold.woff') format('woff')",
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    openSansBoldItalic: {
        fontFamily: 'open_sansbold_italic',
        src: "url('opensans-bolditalic.woff2') format('woff2'), url('opensans-bolditalic.woff') format('woff')",
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    openSansItalic: {
        fontFamily: 'open_sansitalic',
        src: "url('opensans-italic.woff2') format('woff2'), url('opensans-italic.woff') format('woff')",
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
    openSansRegular: {
        fontFamily: 'open_sansregular',
        src: "url('opensans-regular.woff2') format('woff2'), url('opensans-regular.woff') format('woff')",
        fontWeight: 'normal',
        fontStyle: 'normal',
    },
};

export default fontFaces;
