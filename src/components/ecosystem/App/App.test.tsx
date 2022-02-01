import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import { accessibilityChecks, mountTest } from '../../../utils/testing';

describe('App . . .', () => {
    mountTest(<App />);
    accessibilityChecks(<App />);
});
