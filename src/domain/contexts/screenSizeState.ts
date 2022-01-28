import React from 'react';

export enum screenSize {
    DESKTOP = 'desktop',
    TABLET = 'tablet',
    MOBILE = 'mobile',
};

const ScreenSizeContext = React.createContext<screenSize>(screenSize.MOBILE);

export default ScreenSizeContext;
