import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

function ChannelInfo() {
  return (
    <Container>
      <HashtagIcon />

      <Title>chat-livre</Title>

      <Separator />

      <Description>Canal aberto para conversar</Description>
    </Container>
  )
}

export default ChannelInfo;