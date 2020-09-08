import React from 'react';

import { Container, ProfileCirle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCirle src= "https://github.com/guilhermerodz.png"/>
      <SearchInput placeholder="Pesquisar"/>
      <MessageIcon/>
    </Container>
  );
}

export default MobileHeader;