import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function E404({id, className, message, style }) {
	return (
		<div id={id} className={className} style={style}>
			<div className='max-w-[400px]'>
				<Player
					autoplay
					loop
					src="https://lottie.host/1528c63a-bfa1-4446-a02a-1aa23bc11147/PQGS5ybutm.json"
					style={{ height: '100%', width: '100%' }}>
				</Player>
			</div>
			<p className=' text-pw-purple font-black max-sm:text-xl text-2xl'>{message}</p>
		</div>
	)
}
