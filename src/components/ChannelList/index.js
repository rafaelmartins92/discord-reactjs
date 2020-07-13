import React from 'react';

import { Container, Category, AddCategoryIcon, ChannelButton } from './styles';

function ChannelList() {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="🚀| boas-vindas" />
      <ChannelButton channelName="🤖| comandos" />
      <ChannelButton channelName="💬| bate-papo" />
      <ChannelButton channelName="🙋‍♂️| depoimentos" />
      <ChannelButton channelName="💸| oportunidades" />
    </Container>
  )
}

export default ChannelList;