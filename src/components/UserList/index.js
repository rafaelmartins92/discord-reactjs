import React from 'react';

import { Container, Role, User, Avatar } from './styles';

function UserRow({nickname, isBot}) {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

function UserList() {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Rafael Martins" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Guilherme Rodz" isBot />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
      <UserRow nickname="John Doe" />
    </Container>
  )
}

export default UserList;