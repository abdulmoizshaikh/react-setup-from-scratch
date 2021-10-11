import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const handleClick = e => {
    // eslint-disable-next-line
    if (e.target.id != 'modal-main') {
      handleClose();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={showHideClassName}
      onKeyDown={handleClick}
      onClick={handleClick}
    >
      <section id="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default Modal;
