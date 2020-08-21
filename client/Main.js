import React from 'react'
import Sidebar from '../client/components/Sidebar'
import Albums from '../client/components/Albums'
import Player from '../client/components/Player'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main' className='row container'>
        <Sidebar />
        <Albums />
        <Player />
        {/* The music starts here! */}
      </div>
    )
  }
}
