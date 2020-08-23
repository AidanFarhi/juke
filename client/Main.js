
import React, { useState, useEffect } from 'react'
import Sidebar from '../client/components/Sidebar'
import AllAlbums from '../client/components/AllAlbums'
import Player from '../client/components/Player'
import SingelAlbum from '../client/components/SingleAlbum'

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
        albumSelected: false
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
        albumSelected: true,
      })
    } catch(err) {console.log(err)}
  }

  const allAlbumsToggle = () => {
    getData()
  }

  useEffect(()=> {
    if (state.isLoading) {
      getData()
    }
  })

  return (
    <div id='main' className='row container'>
      <Sidebar method={allAlbumsToggle}/>
      {!state.albumSelected ? 
        <AllAlbums method={getAlbum} albums={state.albums}/> : 
        <SingelAlbum data={state.selectedAlbum}/>}
      {/* The music starts here! */}
    </div>
  )
}
