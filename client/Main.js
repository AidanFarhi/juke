
import React, { useState, useEffect } from 'react'
import Sidebar from '../client/components/Sidebar'
import AllAlbums from '../client/components/AllAlbums'
import Player from '../client/components/Player'
import { json } from 'sequelize'

const data = [
  {
    "id": 1,
    "name": "No Dummy",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
      "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 2,
    "name": "I React to State",
    "artworkUrl": "default-album.jpg",
    "artistId": 1,
    "artist": {
 "id": 1,
      "name": "The Crash Test Dummies"
    }
  },
  {
    "id": 3,
    "name": "The Nutcracker",
    "artworkUrl": "default-album.jpg",
    "artistId": 6,
    "artist": {
 "id": 1,
      "name": "Mozart"
    }
  }
]

export default function Main() {
  const [state, setState] = useState({
    albums: [],
    isLoading: true
  })

  const getData = async() => {
    try {
      const response = await fetch('http://localhost:8080/api/albums')
      const albumsData = await response.json()
      setState({
        albums: albumsData,
        isLoading: false
      })
    } catch(err) {console.log(err)}
  }

  useEffect(()=> {
    console.log(state.albums)
    if (state.isLoading) {
      console.log('hit')
      getData()
    }
  })
  
  return (
    <div id='main' className='row container'>
      <Sidebar />
      <AllAlbums albums={state.albums}/>
      <Player />
      {/* The music starts here! */}
    </div>
  )
}
