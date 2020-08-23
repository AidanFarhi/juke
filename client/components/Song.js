import React from 'react'

export default function Song(props) {
    return(
        <tr className={props.className}>
            <td><i onClick={()=> props.method(props.data.audioUrl, props.data.id)} className='fa fa-play-circle' /></td>
            <td>{props.data.number + 1}</td>
            <td>{props.data.name}</td>
            <td>{props.data.artist}</td>
            <td>{props.data.genre}</td>
        </tr>
    )
}