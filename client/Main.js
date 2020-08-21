import React from 'react'
import Sidebar from '../client/components/Sidebar'
import AllAlbums from '../client/components/AllAlbums'
import Player from '../client/components/Player'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <AllAlbums />
        <Player />
        {/* The music starts here! */}
      </div>
    )
  }
}
