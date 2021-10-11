import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { themeColor } from 'utils/theme';

const Card = () => (
  <Container>
    <Content>
      <Image
        src="https://randomuser.me/api/portraits/women/29.jpg"
        alt="consultant"
      />
      <div id="leftCol">
        <p id="orangeTxt">Chat Id: 000015689</p>
        <p id="blackTxt">Depression</p>
        <p className="greyTxt">How do I Get Help For Depression?</p>
        <p className="greyTxt">Can a lack of sleep cause depression?</p>
        <p className="greyTxt">Do children get depression?</p>
        <div>
          <div>
            <p>kari Thompson</p>
            <div id="ratingDiv">
              <p>(4.5)</p>
              <FaIcon icon={faStar} color={themeColor.yellowStar} size="lg" />
            </div>
          </div>
        </div>
      </div>
      <div id="rightCol">
        <div id="rightbox">
          <div>
            <p id="left">Completed On</p>
            <p id="date">Thur, 20 Sep</p>
          </div>
        </div>
      </div>
    </Content>
  </Container>
);

const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  //   width: 340px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;
const Content = styled.div`
  //   display: flex;
  padding: 10px 5px 10px 10px;
  * p {
    color: ${themeColor.black};
    margin: 0;
  }
  > div#leftCol {
    width: 70%;
    > p#orangeTxt {
      color: ${themeColor.orange};
      font-size: 12px;
    }
    > p#blackTxt {
      margin-bottom: 10px;
      font-size: 12px;
      color: ${themeColor.black};
    }
    > p.greyTxt {
      color: ${themeColor.greyTxt};
      font-size: 10px;
      margin-bottom: 5px;
    }
    > div {
      display: flex;
      margin-top: 10px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        margin-right: 10px;
      }
      > div {
        > p {
          font-size: 10px;
        }
        div#ratingDiv {
          display: flex;
          align-items: center;
          > p {
            font-size: 9px;
          }
        }
      }
    }
  }
  > div#rightCol {
    width: 30%;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    div#rightbox {
      display: flex;
      align-items: center;
      > div {
        margin-right: 6px;
      }
      p#date {
        font-size: 12px;
      }
      p#left {
        font-size: 9px;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 40%;
`;
const FaIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;

export default Card;
