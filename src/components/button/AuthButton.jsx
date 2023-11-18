/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function AuthButton({ type, onClick, loadingIndicator }) {
	return (
		<button className=' bg-pw-orange hover:bg-pw-orange-hover h-10 rounded-lg p-2'
			onClick={onClick}>
			{
				loadingIndicator ?
					<p className='text-white font-semibold'>
						<img className='inline h-[20px] animate-spin'
							src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Loading.svg"
							style={{ filter: 'brightness(0) saturate(100%) invert(98%) sepia(4%) saturate(2%) hue-rotate(237deg) brightness(111%) contrast(100%)' }}
							alt="loading" /> Loading...</p> :
					<span className='text-white font-semibold'>{ String(type).toLocaleLowerCase() === 'login' ? 'Login' : 'Register'}</span>
			}
		</button>
	)
}
