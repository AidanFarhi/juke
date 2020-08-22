import React from 'react'

export default function Album(props) {
    console.log(props)
    return (
        <div className='album'>
            <a>
                <img src={props.data.artworkUrl} />
                <p>{props.data.name}</p>
                <small>{props.data.artist.name}</small>
            </a>
        </div>
    )
}