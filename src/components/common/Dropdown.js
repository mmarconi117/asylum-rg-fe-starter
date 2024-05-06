import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Menu, Dropdown as AntDropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

function Dropdown() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [visible, setVisible] = useState(false);

  const handleMenuClick = () => {
    setVisible(!visible);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/graphs">Graphs</Link>
      </Menu.Item>
      {isAuthenticated && (
        <Menu.Item key="3">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      )}
      <Menu.Item key="4" onClick={isAuthenticated ? () => logout({ returnTo: window.location.origin }) : () => loginWithRedirect()}>
        {isAuthenticated ? "Logout" : "Login"}
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="dropdown">
      <AntDropdown overlay={menu} trigger={['click']} visible={visible} onVisibleChange={setVisible}>
        <div className="dropdown-trigger">
          <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </AntDropdown>
    </div>
  );
}

export default Dropdown;
