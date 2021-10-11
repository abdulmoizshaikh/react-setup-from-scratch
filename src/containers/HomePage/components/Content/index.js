import React from 'react';
import styled from 'styled-components';
import {
  ArrowDownOutlined,
  HeartOutlined,
  BulbOutlined,
  RiseOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

export default function HomePageContent() {
  const history = useHistory();

  function handleClick() {
    history.push('/help');
  }

  return (
    <Contanier>
      <Content>
        <Body>
          <HrLineTxtWrapper>
            <HrLine />
            <pre>GET HELP. GET BETTER </pre>
          </HrLineTxtWrapper>
          <h1>a place to feel better,</h1>
          <h1>whenever you go!!!</h1>
          <div id="textArrowWrapper">
            <p>What can we help with today?</p>
            <ArrowDownOutlined />
          </div>
          <CardsWrapper>
            <Card>
              <div className="rightLine">
                <HeartOutlined />
                <p>
                  Advice about <br /> Love &#38; relationship
                </p>
              </div>
            </Card>
            <Card>
              <div className="rightLine">
                <BulbOutlined />
                <p>
                  Improve <br />
                  Career &#38; and work
                </p>
              </div>
            </Card>
            <Card>
              <div className="rightLine">
                <RiseOutlined />
                <p>
                  Focus on <br />
                  self improvement
                </p>
              </div>
            </Card>
            <Card>
              <div>
                <SettingOutlined />
                <p>Something else</p>
              </div>
            </Card>
          </CardsWrapper>
          <Button onClick={handleClick}>Get started</Button>
        </Body>
      </Content>
    </Contanier>
  );
}

const Contanier = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  margin-top: 115px;
  > div {
    // margin-left: 70px;
  }
`;

const Body = styled.div`
  > h1 {
    font-size: 3.5em;
    color: #ffffff;
    line-height: 1em;
    text-transform: capitalize;
    margin-bottom: 0px;
    font-weight: 400;
  }
  > div#textArrowWrapper {
    display: flex;
    margin-top: 10px;
    align-items: center;
    margin-bottom: 30px;
    > p {
      margin-right: 10px;
      margin-bottom: 0px;
      font-size: 12px;
    }
  }
`;

const HrLineTxtWrapper = styled.div`
  display: flex;
  align-items: center;
  > pre {
    margin-bottom: 0px;
    color: #e45f25;
    font-size: 14px;
  }
`;

const HrLine = styled.div`
  border: 0.2px solid #e45f25;
  width: 40px;
  height: 0px;
  margin-right: 10px;
`;

const CardsWrapper = styled.div`
  display: flex;
  margin-top: 15px !important;
  margin-bottom: 15px !important;
  align-items: center;
`;

const Card = styled.div`
  background-color: #1b1e1f80;
  padding: 15px 0px;
  > div {
    height: 70px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 110px;
    > p {
      margin: 0px;
      font-size: 10px;
    }
  }
  > div.rightLine {
    border-right: 1px solid grey;
  }
`;

const Button = styled.button`
  background-color: #ec5128;
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.75em;
  margin-top: 10px;
  outline: none;
  border: none;
  cursor: pointer;
`;
