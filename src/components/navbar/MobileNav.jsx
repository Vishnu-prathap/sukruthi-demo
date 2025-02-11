import styled from "styled-components";
import { useLocation } from "react-router-dom";

import NavButton from "./Button";

import navbarData from "./navbar.json";

const MobileNavigation = (props) => {
  return (
    <MobileNav>
      <br />
      {navbarData.map((button) => {
        return (
          <NavButton
            href={button.href}
            name={button.name}
            curPage={useLocation().pathname}
            subLinks={button.subLinks ? button.subLinks : []}
            mobileView={true}
            setOpen={props.setOpen ? props.setOpen : () => {}}
          />
        );
      })}
    </MobileNav>
  );
};

const MobileNav = styled.nav`
  @media (min-width: 1281px) {
    display: none;
  }
  @media (max-width: 1281px) {
    background: rgba(255, 255, 255, 0.9);

    backdrop-filter: blur(100px);
    -webkit-backdrop-filter: blur(100px);
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    position: fixed;
    top: 0;
    right: 0;
    margin-top: 95px;
    padding-top: 1vh;
    height: 100vh;
    width: 100vw;
    button {
      display: absolute;
      margin-bottom: 2%;
      width: 250px;
    }
  }
`;

export default MobileNavigation;
