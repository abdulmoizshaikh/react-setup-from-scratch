import React, { useState } from 'react';
import { Menu, Dropdown as AntdDropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { Link, useLocation, useHistory } from 'react-router-dom';
import mentorLogo from 'images/wireframe/resizediconmentor-removebg-preview.png';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import AntdModal from 'components/AntdModal';
export default function Header(props) {
  const { background, navItemColor, noBoxShadow } = props;
  const location = useLocation();
  const history = useHistory();

  // state
  const [visible, setVisible] = useState(false);

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">About us</Menu.Item>
      <Menu.Item key="2">Contact us</Menu.Item>
      <Menu.Item key="3">Join community</Menu.Item>
      <Menu.Item key="4">Blog</Menu.Item>
    </Menu>
  );

  const profileMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">Muhammad Moiz</Menu.Item>
      <Menu.Item
        key="2"
        icon={<FontAwesomeIcon icon={faUserCog} />}
        onClick={() => history.push('/profile')}
      >
        Profile
      </Menu.Item>
      <Menu.Item
        key="3"
        icon={<FontAwesomeIcon icon={faSignOutAlt} />}
        onClick={() => history.push('/')}
      >
        Logout
      </Menu.Item>
    </Menu>
  );

  function handleMenuClick() {
    message.info('Click on menu item.');
  }
  const shadow = noBoxShadow && { boxShadow: 'none' };

  return (
    <NavWrapper style={{ background, ...shadow }}>
      <NavBar>
        <AppIconDiv>
          <Link to="/">
            <AppLogo src={mentorLogo} alt="App logo" />
          </Link>
        </AppIconDiv>
        <List>
          <ListItem>
            <Link to="/help" style={{ color: navItemColor }}>
              Get help
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/sessions" style={{ color: navItemColor }}>
              My sessions
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/experts" style={{ color: navItemColor }}>
              Experts
            </Link>
          </ListItem>
          <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <div style={{ color: navItemColor }}>
              More
              <DownOutlined />
            </div>
          </Dropdown>
          {location.pathname === '/' || '' ? (
            <>
              <ListItem onClick={() => setVisible(true)}>Login</ListItem>
              <AntdModal visible={visible} setVisible={setVisible} />
            </>
          ) : (
            <Dropdown
              overlay={profileMenu}
              trigger={['click']}
              placement="bottomRight"
            >
              <UserImage
                alt="user dp"
                src="https://randomuser.me/api/portraits/women/90.jpg"
              />
            </Dropdown>
          )}
        </List>
      </NavBar>
    </NavWrapper>
  );
}

Header.propTypes = {
  background: PropTypes.string.isRequired,
  navItemColor: PropTypes.string.isRequired,
  noBoxShadow: PropTypes.bool,
};

const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #051720; /* For browsers that do not support gradients */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 15px 20px -20px;
`;

const NavBar = styled.nav`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

const AppIconDiv = styled.div`
  // margin-left: 70px;
  height: 100%;
`;

const AppLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const List = styled.div`
  display: flex;
  align-items: center;
`;

const ListItem = styled.span`
  padding: 3px;
  margin: 10px;
  cursor: pointer;
`;

const Dropdown = styled(AntdDropdown)`
  display: flex;
  align-items: center;
  border: none !important;
  justify-content: space-between;
  padding: 3px;
  margin: 10px;
  cursor: pointer;
`;

const UserImage = styled.img`
  width: 40px;
  height: 100%;
  object-fit: contain;
  border-radius: 50%;
`;
