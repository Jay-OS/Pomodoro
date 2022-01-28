import React, { useState, useEffect } from 'react';

import useMediaQuery from '../../../hooks/useMediaQuery';

import responsiveBreakpoints from '../../../theme/styles/responsiveBreakpoints';

import ScreenSizeContext, {
    screenSize,
} from '../../../domain/contexts/screenSizeState';

const ScreenSizeState: React.FC<{}> = ({ children }) => {
    const tabletMatch = useMediaQuery(`(min-width: ${responsiveBreakpoints.TABLET.minWidth}px)`);
    const desktopMatch = useMediaQuery(`(min-width: ${responsiveBreakpoints.DESKTOP.minWidth}px)`);

    const getScreenSize = () => {
        if (desktopMatch) return screenSize.DESKTOP;
        if (tabletMatch) return screenSize.TABLET;
        return screenSize.MOBILE;
    };

    const [currentScreenSize, setCurrentScreenSize] = useState<screenSize>(getScreenSize());

    useEffect(() => {
        setCurrentScreenSize(getScreenSize());
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tabletMatch, desktopMatch]);

    return (
        <ScreenSizeContext.Provider value={currentScreenSize}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export default ScreenSizeState;
