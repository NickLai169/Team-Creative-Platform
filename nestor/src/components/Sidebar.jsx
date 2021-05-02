import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData, SidebarRecruiter  } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import logo from '../images/logo.png'
import userimage from '../images/user.jpg'
import Image from 'react-bootstrap/Image'
import { useHistory } from "react-router-dom";

const Nav = styled.div`
  background: #24348c;
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
  background: #24348c;
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

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'white' }}>
        <Nav>
            
            <img src={logo}  className='logo' onClick={() => history.push('/')}/>
          <NavIcon to='#' >
            <FaIcons.FaBars  onClick={showSidebar}  />
          </NavIcon>
          <span className="user">
            <h3 className="userName">Adam P</h3>
          <Image src={userimage} className='user_img' roundedCircle />
          </span>
        </Nav>
        <div>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to='#'>
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            { props.recruiter ? 
            SidebarRecruiter.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })
            : SidebarData.map((item, index) => {
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