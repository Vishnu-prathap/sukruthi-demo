import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import "./Button.css";

const NavButton = (props) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const changePage = (location) => {
    if (props.mobileView) props.setOpen(false);
    setOpenDropdown(false);
    navigate(location);
  };
  const newTab = (location) => {
    window.open(location, "_blank");
  };

  return (
    <>
      {props.href === "/make-an-impact/donation" ? (
        <DonateButton onClick={(e) => newTab(props.href)}>
          <span>{props.name}</span>
        </DonateButton>
      ) : props.curPage === props.href ? (
        <HighlightedButton
          onMouseEnter={() => setOpenDropdown(true)}
          onMouseLeave={() => setOpenDropdown(false)}
          onClick={() => {}}
        >
          <span onClick={(e) => changePage(props.href)}>{props.name}</span>
          {openDropdown && !props.mobileView && (
            <div className="navbar-item">
              {props.subLinks.length > 0 && (
                <div className="subnav-container">
                  {props.subLinks.map((link) => {
                    return (
                      <div
                        onClick={(e) => changePage(link.href)}
                        className="dropdown-item"
                      >
                        <p>{link.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </HighlightedButton>
      ) : (
        <NormalButton
          onMouseEnter={() => {
            if (!props.mobileView) setOpenDropdown(true);
          }}
          onMouseLeave={() => {
            if (!props.mobileView) setOpenDropdown(false);
          }}
          onClick={() => {
            if (props.mobileView) setOpenDropdown(!openDropdown);
          }}
        >
          <span
            onClick={(e) => {
              if (props.subLinks.length > 0) return;
              changePage(props.href);
            }}
          >
            {props.name}
          </span>
          {openDropdown && !props.mobileView && (
            <div className="navbar-item">
              {props.subLinks.length > 0 && (
                <div className="subnav-container">
                  {props.subLinks.map((link) => {
                    return (
                      <div
                        onClick={(e) => changePage(link.href)}
                        className="dropdown-item"
                      >
                        <p>{link.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {openDropdown && props.mobileView && props.subLinks.length > 0 && (
            <div className="navbar-item-mobile">
              {props.subLinks.length > 0 && (
                <div className="subnav-container-mobile-open">
                  {props.subLinks.map((link) => {
                    return (
                      <div
                        onClick={(e) => changePage(link.href)}
                        className="dropdown-item-mobile"
                      >
                        <p>{link.name}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </NormalButton>
      )}
    </>
  );
};

const DonateButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: solid 3px #b43c3a;
  background-color: #b43c3a;
  border-radius: 0px;
  span {
    color: #ffffff;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
  }
  transition: ease 0.15s;

  &:hover {
    border: solid 3px #b43c3a;

    background-color: #ffffff;
    span {
      color: #b43c3a;
    }
  }
`;
const HighlightedButton = styled.button`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 6px;
  border: none;
  background-color: transparent;
  span {
    color: #b43c3a;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 5;
      position: absolute;
      background: #b43c3a;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 100%;
    }
  }
`;
const NormalButton = styled.button`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 6px;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 10px;
  span {
    color: #121212;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.1px;
    line-height: 1.08;
    padding: 10px 5px;
    white-space: nowrap;
    position: relative;
    &:after {
      background: none repeat scroll 0 0 transparent;
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      left: 50;
      position: absolute;
      background: #b43c3a;
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
      width: 0%;
    }

    &:hover:after {
      color: #b43c3a;
      width: 100%;
      left: 5;
    }
  }
  &:hover {
    span {
      color: #b43c3a;
    }
  }
`;
export default NavButton;
