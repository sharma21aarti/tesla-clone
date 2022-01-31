import React from "react";
import styled from "styled-components";
// import MenuOpenIcon from "@mui/icons-material/MenuOpen";

function Header() {
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="#" alt="">
          Model S
        </a>

        <a href="#" alt="">
          Model 3
        </a>

        <a href="#" alt="">
          Model X
        </a>

        <a href="#" alt="">
          Model Y
        </a>
      </Menu>

      <RightMenu>
        <a href="#" alt="">
          Shop
        </a>
        <a href="#" alt="">
          tesla account
        </a>
        {/* <MenuButton /> */}
      </RightMenu>
    </Container>
  );
}

export default Header;

// const MenuButton = styled(MenuOpenIcon)``;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  top: 0;
  left: 0;
  right: 0;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0px 10px;
    text-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px;
  }
`;
