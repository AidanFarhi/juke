import React, {useState, useEffect} from 'react'
import Player from './Player'
import Song from './Song'

const audio = document.createElement('audio')

export default function SingleAlbum(props) {
    const [state, setState] = useState({
        songs: [],
        isLoading: true,
        playing: false,
        songId: 0
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
            playing: toPlay,
            songId: id
        })
    }
    
    const playSong = (url, id) => {
        audio.pause()
        audio.src = url;
        audio.load();
        audio.play();
        getSongs(id) 
    }

    const nextSong = () => {
        const currentSong = state.songs.filter(song => song.props.data.id === state.songId)[0]
        let index = state.songs.indexOf(currentSong)
        const length = state.songs.length - 1
        if (index + 1 > length) {
            index = 0
        } else {
            index++
        }
        const nextSong = state.songs[index]
        const id = nextSong.props.data.id
        const url = nextSong.props.data.audioUrl
        playSong(url, id)
    }

    const prevSong = () => {
        const currentSong = state.songs.filter(song => song.props.data.id === state.songId)[0]
        let index = state.songs.indexOf(currentSong)
        if (index === 0) {
            index = state.songs.length - 1
        } else {
            index--
        }
        const nextSong = state.songs[index]
        console.log(nextSong)
        const id = nextSong.props.data.id
        const url = nextSong.props.data.audioUrl
        playSong(url, id)
    }

    const methods = [nextSong, prevSong]

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
            {state.playing ? <Player methods={methods} data={audio} /> : null}
        </div>
    )
}