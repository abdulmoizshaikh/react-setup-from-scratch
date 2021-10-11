import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
const { Search } = Input;

const RenderTitle = ({ title }) => (
  <TitleSection>
    <AntdSearch
      placeholder="Issues..."
      allowClear
      enterButton="Search"
      size="middle"
      //   onSearch={onSearch}
    />
    <Title>{title}</Title>
  </TitleSection>
);

RenderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const TitleSection = styled.div`
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 26px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0px;
`;

const AntdSearch = styled(Search)`
  width: 60% !important;
  span {
    font-size: 12px;
    font-weight: bold;
  }
  * button {
    background-color: ${themeColor.orange};
    border-color: ${themeColor.orange};
  }
  button:hover {
    background-color: ${themeColor.orange};
    border-color: ${themeColor.orange};
  }
`;

export default RenderTitle;
