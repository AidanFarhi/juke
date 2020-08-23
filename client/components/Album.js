import React from 'react'

export default function Album(props) {
    return (
        <div className='album'>
            <a onClick={()=> props.method(props.data.id)}>
                <img src={props.data.artworkUrl} />
                <p>{props.data.name}</p>
                <small>{props.data.artist.name}</small>
            </a>
        </div>
    )
}