import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col } from 'antd';
import { useHistory } from 'react-router-dom';

const Card = props => {
  const { backgroundImg, caption, count, name } = props;
  const history = useHistory();

  const style = { backgroundImage: `url(${backgroundImg})` };

  return (
    <AntdCol xs={24} md={4} lg={4} xl={4}>
      <CardDiv style={style} onClick={() => history.push('/FAQs')}>
        <p>{name}</p>
        <div>
          <div>
            <p className="count">{count}</p>
            <p>{caption}</p>
          </div>
        </div>
      </CardDiv>
    </AntdCol>
  );
};

Card.propTypes = {
  backgroundImg: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;

const AntdCol = styled(Col)`
  display: flex !important;
  justify-content: center;
  // background: red;
`;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 170px;
  height: 170px;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 15px 15px 10px 15px;
  // border: 1px solid red;
  // box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  p {
    font-weight: bold;
    margin: 0px;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    > p {
      width: 85%;
    }
    > div {
      > p {
        font-weight: normal;
      }
      > p.count {
        font-weight: bold;
        font-size: 26px;
        line-height: 1em;
      }
    }
  }
`;
