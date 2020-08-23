import React, {useState, useEffect} from 'react'
import Player from './Player'
import Song from './Song'

const audio = document.createElement('audio')

export default function SingleAlbum(props) {
    const [state, setState] = useState({
        songs: [],
        isLoading: true,
        playing: false
    })

    const getSongs = (id) => {
        let toPlay = false
        if (id > 0) {
            toPlay = true
        }
        setState({
            songs: props.data.album.songs.map((song, i) => {
                song.artist = props.data.album.artist.name
                song.number = i
                return <Song key={i} data={song} method={playSong} className={song.id === id ? 'active' : null}/>
            }),
            isLoading: false,
            playing: toPlay
        })
    }
    
    const playSong = (url, id) => {
        audio.pause()
        audio.src = url;
        audio.load();
        audio.play();
        getSongs(id) 
    }

    useEffect(()=> {
        if (state.isLoading) {
            getSongs(0, null)
        }
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
                    {state.songs}
                </tbody>
              </table>
            </div>
            {state.playing ? <Player /> : null}
        </div>
    )
}