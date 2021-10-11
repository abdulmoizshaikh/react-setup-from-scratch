import React from 'react';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
import ScreenTitle from 'components/ScreenTitle';
import Header from 'components/Header';
import { useHistory } from 'react-router';
import UpcomingSessions from './components/UpcomingSessions';
import CompletedSessions from './components/CompletedSessions';

const MySessions = () => {
  const history = useHistory();

  return (
    <Contanier>
      <Header background="none" navItemColor={themeColor.black} />
      <Content>
        <SubContent>
          <ScreenTitle
            history={history}
            title="My Sessions"
            titleColor={themeColor.black}
            iconColor={themeColor.orange}
            iconBC={themeColor.iconBC}
            titleStyle={{ marginBottom: '0px' }}
            titleSectionStyle={{ justifyContent: 'space-between' }}
          />
          <UpcomingSessions />
          <CompletedSessions />
        </SubContent>
      </Content>
    </Contanier>
  );
};
const Contanier = styled.div``;

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
export default MySessions;
