import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RenderTitle = ({ title }) => (
  <TitleSection>
    <Title>{title}</Title>
  </TitleSection>
);

RenderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

const TitleSection = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  color: #ffffff;
`;
export default RenderTitle;
