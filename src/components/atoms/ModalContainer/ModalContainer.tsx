import React from 'react';
import Modal from 'react-modal';

import PreventBackgroundScroll from './PreventBackgroundScroll';

interface ModalContainerProps {
    id?: string;
    isOpen: boolean;
    closeModal: () => void;
    aria?: Modal.Aria;
    styles: Modal.Styles;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
    id,
    isOpen,
    closeModal,
    aria,
    styles,
    children,
}) => {
    return (
        <Modal
            id={id}
            isOpen={isOpen}
            onRequestClose={closeModal}
            aria={aria}
            style={styles}
        >
            <PreventBackgroundScroll>{children}</PreventBackgroundScroll>
        </Modal>
    );
};

export default ModalContainer;
