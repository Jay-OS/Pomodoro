import React from 'react';

import { mountTest, accessibilityChecks } from '../../../utils/testing';

import SiteHeader from './SiteHeader';

describe('SiteHeader . . .', () => {
    mountTest(<SiteHeader />);
    accessibilityChecks(<SiteHeader />);
});