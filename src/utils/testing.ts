import React from 'react';
import ReactDOM from 'react-dom';
import { act, render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { StyleSheetTestUtils } from 'aphrodite/no-important';

export const accessibilityChecks = (
    component: React.ReactElement,
    promise?: Promise<any>,
    rules = {}
) => {
    const axeOptions = { rules: { ...rules } };
    expect.extend(toHaveNoViolations);
    it('Has no accessibility issues', async () => {
        const { container } = render(component);
        if (promise) await act(() => promise);
        const results = await axe(container, axeOptions);
        expect(results).toHaveNoViolations();
    });
};

export const mountTest = (component: React.ReactElement, promise?: Promise<any>) => {
    it('Renders without crashing', async () => {
        if (promise) await act(() => promise);
        const div = document.createElement('div');
        div.setAttribute('id', 'root');
        ReactDOM.render(component, div);
    });
};

/**
 * ONLY TO BE USED TO ALLOW DEBUGGING OF INDIVIDUAL TESTS 
 * AND SHOULD NOT BE LEFT IN FINISHED UNIT TESTING CODE
 * AS IT WILL INFLUENCE THE OUTCOME OF ACCESSIBILITY TESTS
 */
export const disableAphrodite = () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    });
    
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
};
