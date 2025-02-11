import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SubMenuButton = (props) => {
  const navigate = useNavigate();
  const changePage = (location) => {
    navigate(location);
  };
  return (
    <>
      {props.curPage === props.href ? (
        <CurrPageButton onClick={(e) => changePage(props.href)}>
          <span>{props.name}</span>
        </CurrPageButton>
      ) : (
        <NormalButton onClick={(e) => changePage(props.href)}>
          <span>{props.name}</span>
        </NormalButton>
      )}
    </>
  );
};
const CurrPageButton = styled.button`
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: solid 2px #b43c3a;
  background-color: #ffffff;
  border-radius: 10px;
  span {
    color: #b43c3a;
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
    background-color: #b43c3a;
    span {
      color: #ffffff;
    }
  }
`;

const NormalButton = styled.button`
  text-decoration: none;
  display: flex;
  text-decoration: none;
  align-items: center;
  margin: 0 3px;
  padding: 0 8px;
  border: solid 2px #b43c3a;
  background-color: #b43c3a;
  border-radius: 10px;
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
    background-color: #ffffff;
    span {
      color: #b43c3a;
    }
  }
`;
export default SubMenuButton;
