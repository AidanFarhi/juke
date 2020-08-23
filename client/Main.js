
import React, { useState, useEffect } from 'react'
import Sidebar from '../client/components/Sidebar'
import AllAlbums from '../client/components/AllAlbums'
import Player from '../client/components/Player'
import SingelAlbum from '../client/components/SingleAlbum'

const album = {
  "id": 3,
  "name": "Chain React-ion",
  "artworkUrl": "default-album.jpg",
  "artistId": 1,
  "artist": {
    "id": 1,
    "name": "The Crash Test Dummies",
  },
  "songs": [
    {
      "id": 13,
      "name": "Set Some State",
      "audioUrl": "https://storage.googleapis.com/juke-1379.appspot.com/juke-music/Dexter%20Britain/Zenith/01%20Shooting%20Star.mp3",
      "genre": "Instrumental",
      "albumId": 2,
      "artistId": 1
    }
  ]
}

export default function Main() {
  const [state, setState] = useState({
    albums: [],
    isLoading: true,
    selectedAlbum: {},
    albumSelected: false
  })

  const getData = async() => {
    try {
      const response = await fetch('http://localhost:8080/api/albums')
      const albumsData = await response.json()
      setState({
        albums: albumsData,
        isLoading: false,
      })
    } catch(err) {console.log(err)}
  }

  const getAlbum = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/albums/${id}`)
      const album = await response.json()
      setState({
        selectedAlbum: {album},
        isLoading: false,
        albumSelected: true
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
      {!state.albumSelected ? 
        <AllAlbums method={getAlbum} albums={state.albums}/> : 
        <SingelAlbum data={state.selectedAlbum}/>}
      <Player />
      {/* The music starts here! */}
    </div>
  )
}
