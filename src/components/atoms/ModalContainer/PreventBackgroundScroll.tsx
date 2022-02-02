import React from 'react';
import { usePreventScroll } from '@react-aria/overlays';

const PreventBackgroundScroll: React.FC<{}> = ({ children }) => {
    usePreventScroll();
    return <>{children}</>;
};

export default PreventBackgroundScroll;
