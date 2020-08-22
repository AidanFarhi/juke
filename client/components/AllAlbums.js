import React, {useState, useEffect} from 'react'
import Album from './Album'

export default function AllAlbums(props) {
  const [state, setState] = useState({
    albums: [],
    isLoading: true
  })

  const getAlbumData = () => {
    setState({
      albums: props.albums[0].map((album, i) => <Album key={i} data={album}/>),
      isLoading: false
    })
  }

  useEffect(()=> {
    if (state.isLoading) {
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