import React, {useState, useEffect} from 'react'
import Album from './Album'

export default function AllAlbums(props) {
  const [state, setState] = useState({
    albums: [],
    isLoading: true
  })

  const getAlbumData = async () => {
    setState({
      albums: props.albums.map((album, i) => <Album key={i} data={album}/>),
      isLoading: false
    })
  }

  useEffect(()=> {
    if (state.albums.length === 0) {
      getAlbumData()
    }
  })


  return (
      <div className='container'>
        <div id='albums' className='row wrap'>
          {state.albums}
        </div>
      </div>
  )
}