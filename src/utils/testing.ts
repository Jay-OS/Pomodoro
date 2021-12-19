import React from 'react';
import { act, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

export const accessibilityChecks = (component: React.ReactElement, promise?: Promise<any>, rules = {}) => {
    const axeOptions = { rules: { ...rules } };
    expect.extend(toHaveNoViolations);
    it('Has no accessibility issues', async () => {
        const { container } = render(component);
        if (promise) await act(() => promise);
        const results = await axe(container, axeOptions);
        expect(results).toHaveNoViolations();
    });
};
