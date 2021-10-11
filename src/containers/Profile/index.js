import React from 'react';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
import ScreenTitle from 'components/ScreenTitle';
import Header from 'components/Header';
import { womenDp as women } from 'images/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faVenusDouble,
  faLanguage,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';

const payload = [
  { id: 1, title: 'Sara Finch', icon: { name: faUser, color: '#3695b5' } },
  {
    id: 2,
    title: 'Sarafinch@gmail.com',
    icon: { name: faEnvelope, color: '#7d51ee' },
  },
  { id: 3, title: 'Female', icon: { name: faVenusDouble, color: '#e4c73c' } },
  { id: 4, title: '28 years', icon: { name: faUser, color: '#e3776d' } },
  {
    id: 5,
    title: 'English, French',
    icon: { name: faLanguage, color: '#5980e0' },
  },
  {
    id: 6,
    title: 'Mexico, North America',
    icon: { name: faGlobeAmericas, color: '#90c657' },
  },
];

const Profile = () => {
  const history = useHistory();
  return (
    <Contanier>
      <Header background="none" navItemColor={themeColor.black} />
      <Content>
        <SubContent>
          <ScreenTitle
            history={history}
            title="Profile"
            titleColor={themeColor.black}
            iconColor={themeColor.orange}
            iconBC={themeColor.iconBC}
            titleStyle={{
              marginLeft: 30,
              fontSize: '20px',
              marginBottom: '0px',
            }}
            titleSectionStyle={{ height: '80px' }}
          />

          <Card>
            <div>
              <CardLeft>
                <CardImg alt="girl dp" src={women} />
              </CardLeft>
              <CardRight>
                {payload.map(({ title, icon }) => (
                  <ListItem>
                    <IconWrapper>
                      <FontAwesomeIcon icon={icon.name} color={icon.color} />
                    </IconWrapper>
                    {title}
                  </ListItem>
                ))}
              </CardRight>
            </div>
            <Button>Edit</Button>
          </Card>
        </SubContent>
      </Content>
    </Contanier>
  );
};

const Contanier = styled.div`
  background: #f8f8f8;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const SubContent = styled.div`
  width: 90%;
  > div {
    // margin-left: 70px;
  }
`;

const Card = styled.div`
  width: 75%;
  // height: 350px;
  background: #fcfcfc;
  border-radius: 5px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  // border: 1px solid green;
  ${'' /* padding: 40px 0px 40px 0px; */}
  >div {
    display: flex;
    justify-content: space-between;
  }
`;

const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  ${'' /* width: 400px; */}
  ${'' /* border: 1px solid orange; */}
`;

const CardImg = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 5px;
`;

const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
  margin-left: 70px;
  ${'' /* border: 1px solid #eee; */};
`;
const ListItem = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: #f8f8f8;
  // border: 1px solid;
`;

const IconWrapper = styled.div`
  padding: 5px 5px 5px 15px;
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #ec5128;
  padding: 10px;
  border-radius: 5px;
  text-transform: uppercase;
  font-size: 0.75em;
  outline: none;
  border: none;
  cursor: pointer;
  width: 80px;
  color: ${themeColor.white};
  align-self: flex-end;
  margin-top: 50px;
`;

export default Profile;
