import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdPlaylistAdd } from 'react-icons/md';
import { css } from 'aphrodite/no-important';
import { useButton } from '@react-aria/button';

import { screenSize } from '../../../domain/contexts/screenSizeState';

import TodoItemForm from '../TodoItemForm';

import addTodoItemStyles from './AddTodoItemStyles';

interface AddTodoItemProps {
    screenSizeDesc: screenSize;
}

const AddTodoItem = ({ screenSizeDesc }: AddTodoItemProps) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    let modalWidth = '87%';
    switch (screenSizeDesc) {
        case screenSize.DESKTOP:
            modalWidth = '47%';
            break;
        case screenSize.TABLET:
            modalWidth = '82%';
            break;
        case screenSize.MOBILE:
        default:
            modalWidth = '87%';
    }

    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(112, 105, 98, 0.75)',
            backdropFilter: 'blur(5px)',
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '6px 6px 8px #888888',
            fontFamily: 'open_sansregular, sans-serif',
            width: modalWidth,
        },
    };

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
            <Modal
                id="addTodoItem-modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={modalStyles}
                aria={{
                    labelledby: 'todoList-todoForm-heading',
                }}
            >
                <TodoItemForm />
            </Modal>
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
