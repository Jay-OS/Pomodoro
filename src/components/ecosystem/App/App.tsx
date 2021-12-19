import React from 'react';
import { css } from 'aphrodite/no-important';

import appStyles from './AppStyles';

import AppState from '../AppState';
import Timer from '../../molecules/Timer';
import TodoList from '../../molecules/TodoList';
import SiteHeader from '../../atoms/SiteHeader';

const App = () => (
    <div className={css(appStyles.panel)}>
        <SiteHeader />
        <AppState>
            <Timer />
            <TodoList />
        </AppState>
    </div>
);

export default App;
