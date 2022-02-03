import React from 'react';
import Modal from 'react-modal';
import { css } from 'aphrodite/no-important';
import { MdClose } from 'react-icons/md';

import PreventBackgroundScroll from './PreventBackgroundScroll';
import ControlButton, {
    controlButtonType,
    controlButtonSize,
} from '../ControlButton';

import modalContainerStyles from './ModalContainerStyles';

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
            <div className={css(modalContainerStyles.closeButtonContainer)}>
                <ControlButton
                    id={`${id}-close-button`}
                    onClick={closeModal}
                    aria-label="Close"
                    buttonType={controlButtonType.SECONDARY}
                    buttonSize={controlButtonSize.SMALL}
                >
                    <MdClose id={`${id}-close-button-icon`} />
                </ControlButton>
            </div>
            <PreventBackgroundScroll>{children}</PreventBackgroundScroll>
        </Modal>
    );
};

export default ModalContainer;
