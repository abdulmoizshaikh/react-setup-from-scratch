import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const UpcomingSessions = () => (
  <Contanier>
    <p>Upcoming Sessions</p>
    <Card />
  </Contanier>
);

const Contanier = styled.div`
  > p {
    font-weight: bold;
    font-size: 1.3em;
    color: #000000;
  }
`;

export default UpcomingSessions;
