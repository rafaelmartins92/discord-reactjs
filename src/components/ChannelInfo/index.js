import React from 'react';

import { Container, HashtagIcon, Title, Separator, Description } from './styles';

function ChannelInfo() {
  return (
    <Container>
      <HashtagIcon />

      <Title><span role="img" aria-label="rocket">💬</span> | bate-papo</Title>

      <Separator />

      <Description>Canal aberto para conversar</Description>
    </Container>
  )
}

export default ChannelInfo;