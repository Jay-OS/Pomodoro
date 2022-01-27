import React, { useContext } from 'react';

import TimerContext from '../../../domain/contexts/timerState';

import TodoListState from './TodoListState';

const TodoListStateController: React.FC<{}> = ({ children }) => {
    const timerState = useContext(TimerContext);

    return (
        <TodoListState createTimer={timerState.createTimer} clearTimer={timerState.clearTimer}>
            {children}
        </TodoListState>
    );
};

export default TodoListStateController;
