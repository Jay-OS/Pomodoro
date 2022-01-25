import React from 'react';
import { css } from 'aphrodite/no-important';

import appStyles from './AppStyles';

import TodoListState from '../TodoListState';
import TimerState from '../TimerState';
import Timer from '../../molecules/Timer';
import TodoList from '../../molecules/TodoList';
import SiteHeader from '../../atoms/SiteHeader';

const App = () => (
    <main id="app-container" className={css(appStyles.panel)}>
        <SiteHeader />
        <TimerState>
            <Timer />
            <TodoListState>
                <TodoList />
            </TodoListState>
        </TimerState>
    </main>
);

export default App;
