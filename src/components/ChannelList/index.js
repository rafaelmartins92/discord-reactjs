import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton'

function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="🚀| boas-vindas" active />
      <ChannelButton channelName="🤖| comandos" />
      <ChannelButton channelName="💬| bate-papo" />
      <ChannelButton channelName="🙋‍♂️| depoimentos" />
      <ChannelButton channelName="💸| oportunidades" />
    </Container>
  )
}

export default ChannelList;