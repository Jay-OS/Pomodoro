interface breakPoint {
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly mediaQuery: string;
}

interface breakPointList {
    readonly [property: string]: breakPoint;
}

const responsiveBreakpoints: breakPointList = {
    MOBILE: {
        minWidth: 0,
        maxWidth: 480,
        mediaQuery: '@media (max-width: 480px)',
    },
    TABLET: {
        minWidth: 481,
        maxWidth: 768,
        mediaQuery: '@media (min-width: 481px)',
    },
    LAPTOP: {
        minWidth: 769,
        maxWidth: 1024,
        mediaQuery: '@media (min-width: 769px)',
    },
    DESKTOP: {
        minWidth: 1025,
        maxWidth: 1200,
        mediaQuery: '@media (min-width: 1025px)',
    },
    EXTRA_LARGE: {
        minWidth: 1201,
        maxWidth: 20000,
        mediaQuery: '@media (min-width: 1201px)',
    },
};

export default responsiveBreakpoints;
