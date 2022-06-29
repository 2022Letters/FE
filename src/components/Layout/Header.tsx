import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const HeaderPostion = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 45px;
  z-index: 1;
`;

const MenuBtn = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;

const MenuImg = styled.img`
  width: 25px;
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSide = () => {
    setIsOpen(true);
  };

  return (
    <HeaderPostion>
      <MenuBtn role="button" onClick={toggleSide}>
        <MenuImg src="/img/menu.png" />
      </MenuBtn>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </HeaderPostion>
  );
}

export default Header;
