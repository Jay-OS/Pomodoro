import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ControlButton, { ControlButtonProps } from './ControlButton';
import { controlButtonType, controlButtonSize } from './ControlButtonEnums';

import { mountTest, accessibilityChecks } from '../../../utils/testing';

describe('ControlButton . . .', () => {
    const testProps: ControlButtonProps = {
        id: 'button-id',
        title: 'Button title',
        onClick: () => {},
        disabled: false,
        'aria-label': 'Button label',
        buttonType: controlButtonType.PRIMARY,
        buttonSize: controlButtonSize.LARGE,
    };

    const renderComponent = (renderProps?: ControlButtonProps) => {
        const componentProps = renderProps ?? testProps;
        return <ControlButton {...componentProps}>Test</ControlButton>;
    };

    mountTest(renderComponent());
    accessibilityChecks(renderComponent());

    it('Matches snapshot', () => {
        const { container } = render(renderComponent());
        expect(container).toMatchSnapshot();
    });

    it('Calls onClick method when clicked', () => {
        const mockOnClick = jest.fn();
        render(renderComponent({ ...testProps, onClick: mockOnClick }));
        const button = screen.getByRole('button');

        expect(button).toBeVisible();
        expect(mockOnClick).not.toHaveBeenCalled();

        fireEvent.click(button);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
