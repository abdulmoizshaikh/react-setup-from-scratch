import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { themeColor } from 'utils/theme';

const Card = () => {
  function handleClick() {}

  return (
    <Contanier>
      <div id="leftCol">
        <p id="orangeTxt">Chat Id: 000015689</p>
        <p id="greyTxt">How do I Get Help For Depression?</p>
        <div>
          <img
            src="https://randomuser.me/api/portraits/women/29.jpg"
            alt="consultant"
          />
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
            <p>00:04:43</p>
            <p id="left">Left</p>
          </div>
          <FontAwesomeIcon icon={faClock} color={themeColor.orange} />
        </div>
        <Button onClick={handleClick}>Join session</Button>
      </div>
    </Contanier>
  );
};
const Contanier = styled.div`
  display: flex;
  width: 340px;
  height: 150px;
  padding: 10px;
  border-radius: 5px;
  background: #fbe3d9;
  * p {
    color: ${themeColor.black};
    margin: 0;
  }
  > div#leftCol {
    width: 60%;
    > p#orangeTxt {
      color: ${themeColor.orange};
      margin-bottom: 10px;
    }
    > p#greyTxt {
      color: ${themeColor.greyTxt};
      font-size: 10px;
      margin-bottom: 10px;
    }
    > div {
      display: flex;
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
    width: 40%;
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
      p#left {
        font-size: 9px;
      }
    }
  }
`;
const FaIcon = styled(FontAwesomeIcon)`
  font-size: 10px;
`;

const Button = styled.button`
  background-color: #ec5128;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.75em;
  margin-top: 10px;
  outline: none;
  border: none;
  color: ${themeColor.white};
  width: 100px;
  cursor: pointer;
`;

export default Card;
