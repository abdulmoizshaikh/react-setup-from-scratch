import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ScreenTitle = ({ history, title, titleColor, iconColor, iconBC }) => (
  <TitleSection>
    <IconWrapper
      style={{ background: iconBC }}
      onClick={() => history.goBack()}
    >
      <FaIcon icon={faArrowLeft} color={iconColor} size="lg" />
    </IconWrapper>
    <Title style={{ color: titleColor }}>{title}</Title>
    <div />
  </TitleSection>
);

ScreenTitle.propTypes = {
  history: PropTypes.object,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconBC: PropTypes.string.isRequired,
};

const TitleSection = styled.div`
  height: 150px;
  // height: 200px;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  margin-top: 20px;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
`;
const FaIcon = styled(FontAwesomeIcon)``;
const Title = styled.h1`
  font-size: 32px;
`;
export default ScreenTitle;
