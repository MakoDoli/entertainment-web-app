import styled from "styled-components";

export const StyledHeader = styled.header`
  height: 56px;
  background-color: var(--blue);
  color: var(--red);
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  display: flex;
  @media screen and (min-width: 1050px) {
    flex-direction: column;
    width: 96px;
    height: 600px;
    border-radius: 20px;
    margin-left: 24px;
    margin-top: 28px;
    align-items: center;
    position: fixed;
    img {
      width: 40px;
      height: 40px;
    }
    img:first-child {
      width: 32px;
      height: 26px;
    }
  }
`;
export const Navbar = styled.nav`
  height: 16px;
  display: flex;
  gap: 25px;
  @media screen and (min-width: 1050px) {
    flex-direction: column;
  }
`;
export const NavIcon = styled.div<{ mode?: boolean }>`
  cursor: pointer;
  svg {
    path {
      fill: ${(props) => (props.mode ? "#FFFFFF" : "#5A698F")};
    }
    &:hover {
      path {
        fill: #ffffff;
      }
    }
  }
`;
