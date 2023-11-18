/* eslint-disable @next/next/no-img-element */
import React from 'react'

const style = {
	filterLoading: { filter: 'brightness(0) saturate(100%) invert(98%) sepia(4%) saturate(2%) hue-rotate(237deg) brightness(111%) contrast(100%)' }
}

export default function AuthButton({ type, onClick, loadingIndicator, disabled, text }) {
	return (
		<button className=' bg-pw-orange hover:bg-pw-orange-hover h-10 rounded-lg p-2 disabled:bg-pw-gray40'
			onClick={onClick} disabled={disabled}>
			{
				loadingIndicator ?
					<p className='text-white font-semibold'>
						<img
							className='inline h-[20px] animate-spin'
							src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Vector_Loading.svg"
							style={style.filterLoading}
							alt="loading" />
						Loading...
					</p> :
					<span className='text-white font-semibold'>
						{
							String(type).toLocaleLowerCase() === 'login' ? 'Login' :
								String(type).toLocaleLowerCase() === 'register' ? 'Register' : text
						}
					</span>
			}
		</button>
	)
}
