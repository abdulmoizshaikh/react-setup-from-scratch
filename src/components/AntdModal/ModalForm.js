import React from 'react';
import { Modal } from 'antd';
import LoginSignupForm from 'components/LoginSignupForm';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalForm = ({ visible, onCancel, onCreate }) => (
  <AntdModalForm
    visible={visible}
    title="Welcome to BOT Connect"
    okText="Submit"
    onCancel={onCancel}
    onOk={onCreate}
    footer={null}
  >
    <LoginSignupForm />
  </AntdModalForm>
);

ModalForm.propTypes = {
  visible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};
export default ModalForm;

const AntdModalForm = styled(Modal)`
  background: red;
  width: 350px !important;
  border-radius: 10px;
  overflow: hidden;
  padding: 0px !important;
`;
