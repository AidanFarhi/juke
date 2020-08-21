import React from 'react'
import Album from './Album'

export default function AllAlbums() {
    return (
        <div className='container'>
          <div id='albums' className='row wrap'>
            <Album />
            <Album />
            <Album />
          </div>
        </div>
    )
}