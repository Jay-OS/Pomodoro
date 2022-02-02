import React, { useContext, useMemo } from 'react';
import Modal from 'react-modal';

import ScreenSizeContext from '../../../domain/contexts/screenSizeState';
import { screenSize } from '../../../domain/contexts/screenSizeState';

import ModalContainer from './ModalContainer';

export interface ModalContainerControllerProps {
    id?: string;
    isOpen: boolean;
    closeModal: () => void;
    aria?: Modal.Aria;
}

const ModalContainerController: React.FC<ModalContainerControllerProps> = ({
    id,
    isOpen,
    closeModal,
    aria,
    children,
}) => {
    const screenSizeState = useContext(ScreenSizeContext);
    const modalStyles = useMemo<Modal.Styles>(() => {
        let modalWidth = '87%';
        switch (screenSizeState) {
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

        return {
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
    }, [screenSizeState]);

    return (
        <ModalContainer
            id={id}
            isOpen={isOpen}
            closeModal={closeModal}
            aria={aria}
            styles={modalStyles}
        >
            {children}
        </ModalContainer>
    );
};

export default ModalContainerController;
