import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

function ChannelData() {
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <Container>
      <Messages>
        {Array.from(Array(20).keys()).map((n) => (
          <ChannelMessage
            author="Rafael Martins"
            date="14/07/202"
            content="Eae galera!!!"
          />
        ))}

        <ChannelMessage
          author="Guilherme Rodz"
          date="14/07/202"
          content={
            <>
              <Mention>@Rafael Martins</Mention>, gostou do tutorial?
            </>
          }
          hasMention
          isBot
          ref={messagesRef}
        />

        <div ref={messagesRef} />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em # 💬| bate-papo" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
