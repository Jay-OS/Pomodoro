import React, { useState } from 'react';
import { MdPlaylistAdd } from 'react-icons/md';
import { css } from 'aphrodite/no-important';
import { useButton } from '@react-aria/button';

import TodoItemForm from '../TodoItemForm';
import ModalContainer from '../../atoms/ModalContainer';

import addTodoItemStyles from './AddTodoItemStyles';

const AddTodoItem = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const buttonRef = React.useRef<HTMLButtonElement>(null);
    const btnProps = {
        id: 'addTodoButton',
        onClick: openModal,
        'aria-labelledby': 'addTodoButton-text',
    };
    const { buttonProps } = useButton(btnProps, buttonRef);

    return (
        <div
            className={css(addTodoItemStyles.addTodoContainer)}
            id="addTodoItem"
        >
            <ModalContainer
                id="addTodoItem-modal"
                isOpen={modalIsOpen}
                closeModal={closeModal}
                aria={{
                    labelledby: 'todoList-todoForm-heading',
                }}
            >
                <TodoItemForm />
            </ModalContainer>
            <button
                {...buttonProps}
                className={css(addTodoItemStyles.addTodoButton)}
                ref={buttonRef}
            >
                <MdPlaylistAdd
                    id="addTodoButton-icon"
                    className={css(addTodoItemStyles.addTodoButtonIcon)}
                />
                <span
                    id="addTodoButton-text"
                    className={css(addTodoItemStyles.addTodoButtonText)}
                >
                    Add 'to do' items
                </span>
            </button>
        </div>
    );
};

export default AddTodoItem;
