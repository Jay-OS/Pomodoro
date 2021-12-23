import { todoItemShape, shortBreak, longBreak } from '../todoItems';

export const getTodoListWithBreaks = (todoList: todoItemShape[]) => {
    if (todoList.length < 2) {
        return todoList;
    }

    const getBreak = (index: number) => {
        return (index + 1) % 8 === 0 ? { ...longBreak } : { ...shortBreak };
    };

    const newTodoList = [...todoList];
    for (let index = 1; index < newTodoList.length; index += 2) {
        const breakObject = getBreak(index);
        breakObject.id = `${newTodoList[index - 1].id}_break`;
        newTodoList.splice(index, 0, breakObject);
    }

    return newTodoList;
};
