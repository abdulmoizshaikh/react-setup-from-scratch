import React from 'react';
import PropTypes from 'prop-types';
import ModalForm from './ModalForm';

// import 'antd/dist/antd.css';
// import './styles.css';

const AntdModal = props => {
  const { visible, setVisible } = props;
  // const [formRef, setFormRef] = useState(null);
  // console.log('formRef', formRef);
  const handleCreate = () => {
    // formRef.validateFields((err, values) => {
    //   if (err) {
    //     return;
    //   }

    // console.log('Received values of form: ', values);
    // formRef.resetFields();
    setVisible(false);
    // });
  };

  // const saveFormRef = useCallback(node => {
  //   if (node !== null) {
  //     setFormRef(node);
  //   }
  // }, []);

  return (
    <ModalForm
      // ref={saveFormRef}
      visible={visible}
      onCancel={() => setVisible(false)}
      onCreate={() => handleCreate()}
    />
  );
};

AntdModal.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
};
export default AntdModal;
