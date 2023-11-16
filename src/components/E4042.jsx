import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function E4042({id, className, style, message}) {
  return (
    <div id={id} className={className} style={style}>
      <div className='max-w-[400px]'>
        <Player
          autoplay
          loop
          src="https://lottie.host/0419fa58-b650-45e6-8154-0ff62ca17c13/YhPsv5OIx7.json"
          style={{ height: '100%', width: '100%' }}>
        </Player>
      </div>
      <p className=' text-pw-purple font-black max-sm:text-xl text-2xl'>{message}</p>
    </div>
  )
}
