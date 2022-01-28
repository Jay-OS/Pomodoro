import React from 'react';
import { css } from 'aphrodite/no-important';

import TodoListItems from '../TodoListItems';
import TodoListSummary from '../../atoms/TodoListSummary';
import AddTodoItem from '../AddTodoItem';

import todoListStyles from './TodoListStyles';

const TodoList = () => {
    return (
        <section className={css(todoListStyles.todoSectionContainer)} id="todoList-container" aria-labelledby="todoList-heading">
            <h2 id="todoList-heading" className={css(todoListStyles.hidden)}>To do list</h2>
            <div className={css(todoListStyles.todoListContainer)} id="todoList">
                <TodoListSummary />
                <TodoListItems />
            </div>
            <AddTodoItem />
        </section>
    );
};

export default TodoList;
