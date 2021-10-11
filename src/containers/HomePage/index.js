/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import styled from 'styled-components';
import {
  InstagramOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import Header from 'components/Header';
import { themeColor } from 'utils/theme';
import HomePageContent from './components/Content';

export default function HomePage() {
  return (
    <Contanier>
      <Header
        background={themeColor.headerLinearGradientBC}
        navItemColor={themeColor.white}
      />
      <HomePageContent />
      <FooterWrapper>
        <Footer>
          <p>Follow us</p>
          <InstagramOutlined />
          <TwitterOutlined />
          <FacebookOutlined />
        </Footer>
      </FooterWrapper>
    </Contanier>
  );
}
// eslint-disable-next-line
const vh = Math.max(
  document.documentElement.clientHeight || 0,
  window.innerHeight || 0,
);

const screenRemainingHeight = vh - 80;

const Contanier = styled.div`
  // height: ${screenRemainingHeight}px;
  height: ${vh}px;
  color: #ffffff;
  background-color: 0b1d26; /* For browsers that do not support gradients */
  background-image: linear-gradient(
    to right,
    #0b1d26,
    #102129,
    #14252c,
    #233238,
    #555957,
    #5e6666,
    #999b94
  );
`;

const FooterWrapper = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 170px;
  padding: 10px;
  color: #000000;
  cursor: pointer;
  > p {
    margin: 0px;
    margin-right: 10px;
  }
`;
