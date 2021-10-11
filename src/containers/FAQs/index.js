import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import { themeColor } from 'utils/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import RenderTitle from './RenderTitle';

const FAQs = () => {
  const history = useHistory();
  return (
    <Contanier>
      <Header
        background={themeColor.headerLinearGradientBC}
        navItemColor={themeColor.white}
      />
      <RenderTitle title="What type of counselling are you looking for" />
      <Content>
        <InnerContent>
          <LeftContent>
            <List>
              <ListItem>
                <p>How do I Get Help for Depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.orange}
                />
              </ListItem>
              <ListItem>
                <p>How is Depression Diagnosed?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>
                  I have heard lots of warning about drug intraction with
                  certain depression medicines. What are they?
                </p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.orange}
                />
              </ListItem>
              <ListItem>
                <p>What Medications Are Used to Treat Depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.orange}
                />
              </ListItem>
              <ListItem>
                <p>What Other Treatments are Available for Depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Can Depression be Prevented?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Is Depression a mental illness?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>
                  How can you determine if an illness is causing depression or
                  depression is causing an illness?
                </p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Where Can I Get More Information on Depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Can a Lack of sleep cause depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Do children get Depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>
                  Are there any alternatives to the traditional treatments for
                  depression that I can try?
                </p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
              <ListItem>
                <p>Why are women more likely to get depression?</p>
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  color={themeColor.faCheckboxGray}
                />
              </ListItem>
            </List>
            <Button onClick={() => history.push('/experts')}>
              Find your Expert
            </Button>
          </LeftContent>
          <RightContent>
            <h3>What is depression?</h3>
            <p>
              Depression (major depression disorder) is a common and serious
              medical illness that negatively affects how you feel, the way you
              think and how you act. Fortunately, it is also treatable.
              Depression cause feelings of sadness and/or a loss of interest in
              activities you once enjoyed. It can lead to a variety of emotional
              and physical problems and can decrease your ability to function at
              work and at home.
            </p>

            <p>
              Depression symptoms can vary from mild to severe and can include:
            </p>

            <p>Feelings sad or having a depressed mood</p>

            <p>Loss of interest or pleasure in activities once enjoyed</p>

            <p>
              Change in appetite -- weight loss or gain unrelated to dieting{' '}
            </p>

            <p>Trouble sleeping or sleeping to much</p>
            <p>Loss of energy or increased fatigue</p>
            <p>
              Increase in pusposeless physical activity (e.g., inability to sit
              still, pacing, handwringing) or slowed movements or speech (these
              actions must be severe enough to be observable by others)
            </p>

            <p>Feeling worthless or guilty</p>

            <p>Difficulty thinking, concentrating or making decisions</p>

            <p>Thoughts of death or suicide</p>

            <p>
              Symptoms must last atleast two weeks and must present a change in
              your previous level of functioning for a diagnosis of depression.
            </p>

            <p>
              Also, medical conditions(e.g., thyroid problems, a brain tumor or
              vitamin deficency) can mimic symptoms of depression so it is
              important to rule out general medical causes.
            </p>

            <p>
              Depression affects an estimated one in 15 adults (6.7%) in any
              given year. And one in six people (16.6%) will experience
              depression at some time in their life. Depression can occur at
            </p>
          </RightContent>
        </InnerContent>
      </Content>
    </Contanier>
  );
};

const Contanier = styled.div`
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

const Content = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  * p {
    color: ${themeColor.black};
  }
`;
const InnerContent = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
const LeftContent = styled.div`
  width: 55%;
`;
const List = styled.div`
  height: 400px;
  overflow: scroll;
`;
const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${themeColor.white};
  border-radius: 5px;
  p {
    margin-bottom: 0px;
    font-size: 14px;
  }
  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  background-color: #ec5128;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.75em;
  outline: none;
  border: none;
  cursor: pointer;
  width: 100%;
`;

const RightContent = styled.div`
  width: 40%;
  height: 400px;
  overflow: scroll;
  font-size: 14px;
  > h3 {
    font-weight: bold;
  }
`;

export default FAQs;
