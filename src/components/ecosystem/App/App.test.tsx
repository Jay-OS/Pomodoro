import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { accessibilityChecks } from '../../../utils/testing';

describe('App . . .', () => {
    accessibilityChecks(<App />);
});
