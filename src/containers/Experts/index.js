import React from 'react';
import styled from 'styled-components';
import { themeColor } from 'utils/theme';
import Header from 'components/Header';
import { StonesBCImgCroped } from 'images/assets';
import { useHistory } from 'react-router';
import ScreenTitle from './ScreenTitle';
import ExpertsList from './List';

const Experts = () => {
  const history = useHistory();
  return (
    <Contanier>
      <HeaderSection>
        <Header background="none" navItemColor={themeColor.white} noBoxShadow />
        <Content>
          <SubContent>
            <ScreenTitle
              title="Our Subject Matter Experts"
              titleColor={themeColor.white}
              iconColor={themeColor.white}
              iconBC="none"
              history={history}
            />
          </SubContent>
        </Content>
      </HeaderSection>
      <Body>
        <BodySubContent>
          <ExpertsList />
        </BodySubContent>
      </Body>
    </Contanier>
  );
};

const Contanier = styled.div``;

const HeaderSection = styled.div`
  background-image: url(${StonesBCImgCroped});
  background-size: 100% 100%;
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

const Body = styled.div`
  display: flex;
  justify-content: center;
`;

const BodySubContent = styled.div`
  width: 90%;
  margin-top: -70px;
  > div {
    // margin-left: 70px;
  }
`;
export default Experts;
