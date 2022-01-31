import React, { useState } from "react";
import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from "@mui/icons-material/Close";

function Header() {
  const [shawStatus, setShowStatus] = useState(false);
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
        <MenuButton />
      </RightMenu>

      <RightNav>
        <CloseWrapper>
          <CoustomClose />
        </CloseWrapper>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Used Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Trade-In
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Cyber-Truck
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Roadaster
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
        <li>
          <a href="#" alt="">
            Existing Inventory
          </a>
        </li>
      </RightNav>
    </Container>
  );
}

export default Header;

const RightNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;


  li{
    padding 15px 0px;
    border-bottom: 1px solid rgba(0,0,0,.2)
  }

  a{
    font-weight:600;

  }
`;

const MenuButton = styled(MenuOpenIcon)`
  cursor: pointer;
`;

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
  z-index: 1;
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
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 10px;
  }
`;

const CoustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
