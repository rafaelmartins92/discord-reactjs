import React from 'react';

import { 
  Container, 
  Profile, 
  Avatar, 
  UserData, 
  Icons, 
  MicIcon, 
  HeadphoneIcon, 
  SettingIcon 
} from './styles';

function UserInfo() {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Raafs</strong>
          <span>#3999</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingIcon />
      </Icons>
    </Container>
  )
}

export default UserInfo;