import React from 'react';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faHeart,
  faCalendarCheck,
} from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const CardComp = props => {
  const { name, image, reviews } = props;
  return (
    <Card>
      <div>
        <Image alt="example" src={image} />
        <Title>{name}</Title>
        <Experience>
          <FaIcon icon={faCalendarCheck} color={themeColor.calenderBC} />
          <Caption>7 years in practice</Caption>
        </Experience>
        <Experience>
          <FaIcon icon={faHeart} color={themeColor.pinkHeart} />
          <Caption>Specialization</Caption>
        </Experience>
        <Description>
          Depression, Relationships, Stress, Mood disorders, Anger management,
          Anxiety, Self esteem
        </Description>
        <RatingBox>
          <FaIcon icon={faStar} color={themeColor.yellowStar} />
          <FaIcon icon={faStar} color={themeColor.yellowStar} />
          <FaIcon icon={faStar} color={themeColor.yellowStar} />
          <FaIcon icon={faStar} color={themeColor.yellowStar} />
          <FaIcon icon={faStarHalfAlt} color={themeColor.yellowStar} />
          <p>({reviews})</p>
        </RatingBox>
      </div>
    </Card>
  );
};

CardComp.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reviews: PropTypes.string.isRequired,
};

const Card = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  padding: 20px;
  cursor: pointer;
  &:hover {
    border-color: transparent;
    box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),
      0 5px 12px 4px rgb(0 0 0 / 9%);
  }
`;
const Image = styled.img`
  height: 150px;
  width: 100%;
`;

const Title = styled.p`
  font-size: 20px;
  color: ${themeColor.black};
  margin: 5px 0px 5px 0px;
`;

const Caption = styled.p`
  color: ${themeColor.lightGreyTxt};
  font-size: 10px;
  margin: 0px;
`;
const Experience = styled.div`
  display: flex;
  alignitems: center;
  margin: 0px 0px 5px 0px;
`;
const Description = styled.p`
  color: ${themeColor.greyTxt};
  font-size: 10px;
  margin-bottom: 5px;
`;
const RatingBox = styled.div`
  display: flex;
  margin-top: 10px;
  > p {
    font-size: 10px;
    color: ${themeColor.greyTxt};
    margin: 0px;
  }
`;

const FaIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
export default CardComp;
