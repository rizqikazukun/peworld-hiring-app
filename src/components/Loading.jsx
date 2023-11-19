import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'

export default function Loading({trigger}) {
	return (
		<>
			{
				!trigger ? '' :
					<div className='fixed top-0 w-full h-full bg-pw-loading p-10
        							flex flex-col justify-center z-[9999] gap-2'>

						<div className='self-center items-center max-w-[120px]'>
							<Player
								autoplay
								loop
								src="/assets/lotties/loading.json"
								style={{ height: '100%', width: '100%' }}>
							</Player>
						</div>

						<p className=' text-center text-pw-purple font-bold text-[14pt]'>Loading...</p>

					</div>
			}

		</>
	)
}
