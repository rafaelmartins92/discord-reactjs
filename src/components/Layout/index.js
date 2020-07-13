import React from 'react';

import { Grid } from './styles';

import ServerList from '../ServerList'
import ServerName from '../ServerName'
// import ChannelInfo from '../ChannelInfo'

function Layout() {
  return (
    <Grid>
      <ServerList />
      <ServerName />
    </Grid>
  )
}

export default Layout;