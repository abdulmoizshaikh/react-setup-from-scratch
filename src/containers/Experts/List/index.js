import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
// import { themeColor } from 'utils/theme';
import PropTypes from 'prop-types';
import {
  man1,
  man2,
  man3,
  man7,
  man5,
  man6,
  man9,
  women1,
  women3,
  women4,
  women6,
  women8,
} from 'images/assets';
import Card from './Card';

const cardsPayload = [
  { id: 1, name: 'Kari Thompson', image: women1, reviews: '12k' },
  { id: 2, name: 'John Smith', image: man1, reviews: '10k' },
  { id: 3, name: 'Ben Stokes', image: man2, reviews: '7k' },
  { id: 4, name: 'Charles Ken', image: man3, reviews: '5k' },
  { id: 5, name: 'Kenyatta Wilson', image: women8, reviews: '1.5k' },
  { id: 6, name: 'Carol Shellby', image: man7, reviews: '1k' },
  { id: 7, name: 'Alizay Benz', image: women3, reviews: '2.5k' },
  { id: 8, name: 'John Wick', image: man5, reviews: '2k' },
  { id: 9, name: 'Shane watson', image: man6, reviews: '7k' },
  { id: 10, name: 'Karol Smart', image: man9, reviews: '4k' },
  { id: 11, name: 'Natasha Gen', image: women4, reviews: '2.5k' },
  { id: 12, name: 'Kozane Lee', image: women6, reviews: '8k' },
];

const RenderCardCol = props => (
  <AntdCol xs={24} md={7} lg={7} xl={7}>
    <Card {...props} />
  </AntdCol>
);

const res = [];

const renderListByRowCount = (arr, rCount) => {
  const row = arr.slice(0, rCount);
  res.push(row);
  arr.splice(0, rCount);
  if (arr.length > 0) {
    return renderListByRowCount(arr, rCount);
  }
  return res;
};

const ExpertsList = () => (
  <Container>
    <Content>
      <div>
        <AntdRow justify="space-between">
          {cardsPayload.length > 0 &&
            renderListByRowCount(cardsPayload, 3).map(
              row =>
                // if (row.length > 0) {
                row.map(props => <RenderCardCol key={props.id} {...props} />),
              // }
            )}
        </AntdRow>
      </div>
    </Content>
  </Container>
);

ExpertsList.propTypes = {
  id: PropTypes.number,
};

const Container = styled.div`
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
  background: #fff;
  border-radius: 5px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid #000;
  > div {
    width: 85%;
    margin-bottom: 50px;
    // border: 1px solid red;
  }
`;

const AntdRow = styled(Row)``;

const AntdCol = styled(Col)`
  display: flex !important;
  justify-content: center;
`;

export default ExpertsList;
