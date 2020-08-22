
import React, { useState, useEffect } from 'react'
import Sidebar from '../client/components/Sidebar'
import AllAlbums from '../client/components/AllAlbums'
import Player from '../client/components/Player'
import Album from '../server/db/album'
import { Artist } from '../server/db'

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
    albums: [data],
    isLoading: true
  })

  const getData = async() => {
    try {
      const albumData = await Album.findAll({include: Artist})
      console.log(albumData)
      setState({
        isLoading: false
      })
    } catch(err) {console.log(err)}
  }

  useEffect(()=> {
    if (state.isLoading) {
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
