import React, { useContext } from 'react';

import ScreenSizeContext from '../../../domain/contexts/screenSizeState';

import AddTodoItem from './AddTodoItem';

const AddTodoItemController = () => {
    const screenSize = useContext(ScreenSizeContext);
    return (
        <AddTodoItem screenSizeDesc={screenSize} />
    );
};

export default AddTodoItemController;
