import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList'
import ServerName from '../ServerName'
import ChannelInfo from '../ChannelInfo'
import ChannelList from '../ChannelList'

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
      <ChannelList />
      <ChannelInfo />
    </Grid>
  )
}

export default Layout;