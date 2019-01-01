import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const ContentMessage = styled.p``;

ReactModal.setAppElement('#root');

const SmallStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  contentLabel,
  message,
  children,
}) => (
  <ReactModal
    isOpen={isOpen}
    onAfterOpen={onAfterOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
    style={SmallStyles}
  >
    {message ? <ContentMessage>{message}</ContentMessage> : children}
  </ReactModal>
);

export default Modal;
