import React from 'react';
import styled from 'styled-components';
import { DownOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { themeColor } from 'utils/theme';
import Card from './Card';

const row1Data = [1, 2, 3, 4];
const row2Data = [5, 6, 7, 8];

const RenderCardCol = () => (
  <AntdCol xs={24} md={5} lg={5} xl={5}>
    <Card />
  </AntdCol>
);

const CompletedSessions = () => (
  <Container>
    <div id="titleBar">
      <p>Completed Sessions (13)</p>
      <Button>
        Show all
        <DownOutlined className="DownOutlined" />
      </Button>
    </div>
    <Content>
      <div>
        <AntdRow justify="space-between">
          {row1Data.length > 0 &&
            row1Data.map(number => <RenderCardCol key={number} />)}
        </AntdRow>
      </div>
      <div>
        <AntdRow justify="space-between">
          {row2Data.length > 0 &&
            row1Data.map(number => <RenderCardCol key={number} />)}
        </AntdRow>
      </div>
    </Content>
  </Container>
);

const Container = styled.div`
  margin-top: 30px;
  > div#titleBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    > p {
      font-weight: bold;
      font-size: 1.3em;
      color: #000000;
      margin: 0px;
    }
  }
`;

const Content = styled.div`
  border: 1px solid #fff;
  background: #fff;
  > div {
    display: flex;
    justify-content: center;
    align-items: end;
  }
`;

const AntdRow = styled(Row)`
  margin-bottom: 35px;
`;

const AntdCol = styled(Col)`
  display: flex !important;
  justify-content: center;
  @media (min-width: 1200px) {
    max-width: 22.833333% !important;
  }
  @media (min-width: 992px) {
    max-width: 22.833333% !important;
  }
  @media (min-width: 768px) {
    max-width: 22.833333% !important;
  }
`;

const Button = styled.button`
  background-color: ${themeColor.greyBackground};
  border: none;
  font-size: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 2px;
  justify-content: space-between;
  & .DownOutlined {
    margin-left: 5px;
  }
`;

export default CompletedSessions;
