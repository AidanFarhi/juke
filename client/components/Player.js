import React, {useState, useEffect} from 'react'

export default function Player(props) {
  const [state, setState] = useState({
    isLoading: true,
    playing: true,
  })

  let audio = props.data
  const pause = () => {
    audio.pause()
  }
  const play = () => {
    audio.play()
  }
  const toggle = () => {
    setState({
      playing: !state.playing,
    })
  }

  useEffect(()=> {
    if (state.isLoading) {
      setState({
        isLoading: false,
        playing: true
      })
    }
  })

  return (
    <div id='player-container'>
      <div id='player-controls'>
        <div className='row center'>
          <i className='fa fa-step-backward'></i>
          <div onClick={()=> toggle()}>
          <i onClick={state.playing ? pause : play}
            className={state.playing ? 'fa fa-pause-circle' : 'fa fa-play-circle'}></i>
          </div>
          <i onClick={props.method} className='fa fa-step-forward'></i>
        </div>
      </div>
    </div>
  )
}