import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ScreenTitle = ({
  history,
  title,
  titleColor,
  iconColor,
  iconBC,
  titleSectionStyle,
  titleStyle,
}) => (
  <TitleSection style={{ ...titleSectionStyle }}>
    <IconWrapper
      style={{ background: iconBC }}
      onClick={() => history.goBack()}
    >
      <FaIcon icon={faArrowLeft} color={iconColor} size="lg" />
    </IconWrapper>
    <Title style={{ color: titleColor, ...titleStyle }}>{title}</Title>
    <div />
  </TitleSection>
);

ScreenTitle.propTypes = {
  history: PropTypes.object,
  title: PropTypes.string.isRequired,
  titleColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  iconBC: PropTypes.string.isRequired,
  titleSectionStyle: PropTypes.object.isRequired,
  titleStyle: PropTypes.object.isRequired,
};

const TitleSection = styled.div`
  height: 125px;
  display: flex;
  // justify-content: space-between;
  align-items: center;
  * {
    // border: 1px solid #000;
  }
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
  font-size: 30px;
`;
export default ScreenTitle;
