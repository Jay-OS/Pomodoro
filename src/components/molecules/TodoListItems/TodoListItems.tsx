import React from 'react';

import TodoListItem from '../../atoms/TodoListItem';

import { todoItemShape } from '../../../entities/todoItems';
import { defaultTimesInMinutesType } from '../../../constants/defaultTimesInMinutes';

interface ITodoListItems {
    listItems: todoItemShape[];
    itemDurations: defaultTimesInMinutesType;
    currentItemIndex: number | undefined;
    currentTimerMs: number;
}

const TodoListItems: React.FC<ITodoListItems> = (props) => {
    const { listItems, itemDurations, currentItemIndex, currentTimerMs } =
        props;
    return (
        <>
            {!!listItems && listItems.length > 0 ? (
                listItems.map((value, index) => (
                    <TodoListItem
                        todoItem={value}
                        itemDurations={itemDurations}
                        isCurrentItem={index === currentItemIndex}
                        currentTimerMs={currentTimerMs}
                    />
                ))
            ) : (
                <span>You haven't planned any 'to do' items yet.</span>
            )}
        </>
    );
};

export default TodoListItems;
