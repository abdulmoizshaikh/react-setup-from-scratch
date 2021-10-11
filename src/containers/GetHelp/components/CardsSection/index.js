import React from 'react';
import styled from 'styled-components';
import { Row } from 'antd';
import { CardsData } from './CardsData';
import Card from './Card';

const slicingArray = (list, size, response) => {
  if (list.length > 0) {
    const head = list.slice(0, size);
    const tail = list.slice(size);
    response.push(head);
    if (tail.length > 0) {
      slicingArray(tail, size, response);
    }
  }
  return response;
};

const CardsSection = () => {
  const response = [];
  return (
    <Container>
      {CardsData.length > 0 &&
        slicingArray(CardsData, 5, response).map((cardRow, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>
            <AntdRow justify="space-around">
              {cardRow.map(card => (
                <Card key={card.name} {...card} />
              ))}
            </AntdRow>
          </div>
        ))}
      <Showmore>
        <button type="button">Show more options</button>
      </Showmore>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid #fff;
  background: #fff;
  > div {
    display: flex;
    justify-content: center;
  }
`;

const AntdRow = styled(Row)`
  width: 90%;
  margin: 40px 0px 0px 0px;
`;

const Showmore = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px 20px 0px;
  > button {
    padding: 5px;
    border-radius: 5px;
    border: none;
    text-align: center;
    font-weight: bold;
    color: #000;
    width: 300px;
    background-color: #f2f2f2;
    cursor: pointer;
  }
`;
export default CardsSection;

/* <Col xs={24} md={4} lg={4} xl={4}>
          One of three columns
        </Col>
        <Col xs={24} md={4} lg={4} xl={4}>
          One of three columns
        </Col>
        <Col xs={24} md={4} lg={4} xl={4}>
          One of three columns
        </Col>
        <Col xs={24} md={4} lg={4} xl={4}>
          One of three columns
        </Col> */
