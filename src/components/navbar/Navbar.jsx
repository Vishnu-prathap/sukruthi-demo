import styled from "styled-components";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import MobileNavigation from "./MobileNav";
import NavButton from "./Button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

import navbarData from "./navbar.json";

import logo from "../../assets/logo.png";
const NavBar = (props) => {
  const [open, setOpen] = useState(false);
  const closeIcon = (
    <IoClose size="42px" color="#b43c3a" onClick={() => setOpen(!open)} />
  );
  const openIcon = (
    <HiOutlineMenuAlt3
      size="42px"
      color="#b43c3a"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <Nav>
      <Logo className="text-align-text align-items-center justify-content-center">
        <a href="/home">
          <img src={logo} alt="Sukruthi " />
        </a>
      </Logo>
      <NavMenu>
        {navbarData.map((button) => {
          return (
            <NavButton
              href={button.href}
              name={button.name}
              curPage={useLocation().pathname}
              subLinks={button.subLinks ? button.subLinks : []}
              mobileView={false}
            />
          );
        })}
      </NavMenu>
      <MobiNav>
        {open ? closeIcon : openIcon}
        {open && <MobileNavigation setOpen={setOpen} />}
      </MobiNav>
    </Nav>
  );
};
const MobiNav = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
`;
const Nav = styled.nav`
  @media (min-width: 992px) {
    padding: 0 8% 0;
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height: 120px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 30;
  }
  @media (max-width: 992px) {
    padding: 0 5% 0;
    position: relative;
    flex-flow: row nowrap;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 30;
  }
`;

const Logo = styled.div`
  img {
    image-rendering: -webkit-optimize-contrast; /* Chrome, Edge, Opera, and Safari */
    image-rendering: crisp-edges;
  }
  @media (min-width: 992px) {
    padding: 0;
    width: 250px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 250px;
    }
  }
  @media (max-width: 992px) {
    padding: 0;
    width: 200px;
    margin-top: 4px;
    margin-bottom: 4px;
    max-height: 70px;
    font-size: 0;
    display: flex;
    flex-flow: row nowrap;
    img {
      display: flex;
      width: 100%;
    }
  }
`;

const NavMenu = styled.div`
  @media (min-width: 992px) {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: 0px;
    margin-left: 25px;
    a {
      display: flex;
      text-decoration: none;
      align-items: center;
      padding: 0 12px;
      span {
        color: #121212;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.5px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        transition: 0.3s;
      }
      &:hover {
        span {
          background-image: linear-gradient(90deg, #ff6e7e, #e542fe, #772cfd);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
      }
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default NavBar;
