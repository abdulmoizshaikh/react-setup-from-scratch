import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { themeColor } from 'utils/theme';
import RenderTitle from './components/Title';
import CardsSection from './components/CardsSection';

const GetHelp = () => (
  <Contanier>
    <Header
      background={themeColor.headerLinearGradientBC}
      navItemColor={themeColor.white}
    />
    <RenderTitle title="common issues" />
    <CardsSection />
  </Contanier>
);

const Contanier = styled.div`
  // height: 100vh;
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
export default GetHelp;
