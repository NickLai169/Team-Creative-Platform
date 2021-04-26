import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../images/logo.jpeg'
import userimage from '../images/sdalir.jpg'
import Image from 'react-bootstrap/Image'

const Nav = styled.div`
  background: #FFB600;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
`;

const SidebarNav = styled.nav`
  background: #FFB600;
  width: 250px;
  height: 80vh;
  display: flex;
  justify-content: center;
  position: fixed;
  border-radius: 50px;
  top: 100px;
  left: ${({ sidebar }) => (sidebar ? '2.5%' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav>
            
            <img src={logo}  className='logo'/>
          <NavIcon to='#' >
            <FaIcons.FaBars  onClick={showSidebar}  />
          </NavIcon>
          <Image src={userimage} className='user_img' roundedCircle />
        </Nav>
        <div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;