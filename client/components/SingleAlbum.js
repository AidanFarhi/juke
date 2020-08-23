import React, {useState, useEffect} from 'react'

export default function SingleAlbum(props) {
    const [state, setState] = useState({
        songs: [],
        isLoading: true
    })

    return (
        <div className='container'>
            <div id='single-album' className='column'>
                <div className='album'>
                <a>
                    <img src={props.data.album.artworkUrl} />
                    <p>{props.data.album.name}</p>
                    <small>{props.data.album.artist.name}</small>
                </a>
                </div>

                <table id='songs'>
                <tbody>
                
                <tr className='gray'>
                  <td />
                  <td>#</td>
                  <td>Name</td>
                  <td>Artist</td>
                  <td>Genre</td>
                </tr>

                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>1</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>2</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
                <tr>
                  <td><i className='fa fa-play-circle' /></td>
                  <td>3</td>
                  <td>Song Name</td>
                  <td>Artist Name</td>
                  <td>Song Genre</td>
                </tr>
              </tbody>
                </table>
            </div>
        </div>
    )
}