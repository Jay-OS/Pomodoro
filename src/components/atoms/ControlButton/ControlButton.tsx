import * as React from 'react';
import { css } from 'aphrodite/no-important';

import controlButtonStyles from './ControlButtonStyles';

interface ControlButtonProps {
    onClick: () => void;
    ['aria-label']: string;
};

const ControlButton: React.FC<ControlButtonProps> = (props) => (
    <button
        className={css(controlButtonStyles.controlButton)}
        onClick={props.onClick}
        aria-label={props['aria-label']}
    >
        {props.children}
    </button>
);

export default ControlButton;
