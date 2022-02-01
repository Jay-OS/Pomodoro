import React from 'react';
import Modal from 'react-modal';
import { css } from 'aphrodite/no-important';

import appStyles from './AppStyles';

import TodoListState from '../TodoListState';
import TimerState from '../TimerState';
import ScreenSizeState from '../ScreenSizeState';
import Timer from '../../molecules/Timer';
import TodoList from '../../molecules/TodoList';
import SiteHeader from '../../atoms/SiteHeader';

if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#root');

const App = () => (
    <main id="app-container" className={css(appStyles.panel)}>
        <ScreenSizeState>
            <SiteHeader />
            <TimerState>
                <Timer />
                <TodoListState>
                    <TodoList />
                </TodoListState>
            </TimerState>
        </ScreenSizeState>
    </main>
);

export default App;
