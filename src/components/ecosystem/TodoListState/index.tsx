import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import TodoListState from './TodoListState';

const AppStateController: React.FC<{}> = ({ children }) => {
    const timerState = useContext(TimerContext);

    return (
        <TodoListState createTimer={timerState.createTimer}>
            {children}
        </TodoListState>
    );
};

export default AppStateController;
