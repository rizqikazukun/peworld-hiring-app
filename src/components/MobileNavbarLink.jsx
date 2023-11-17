/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function MobileNavbarLink({ onClick, pageName, hidden }) {
	return (
		<div className={`border-b-2 py-4 w-full flex hover:cursor-pointer ${pageName.toLowerCase() === 'close' ? 'justify-center' : 'justify-between'}`}
			onClick={onClick} hidden={hidden}>
			<p className=' text-[2.6vh] font-bold text-pw-purple'>
				{pageName}
			</p>
			
			{pageName.toLowerCase() === 'close' ? '' : <img src="/assets/icons/next.svg" alt={`Icons ${pageName}`} />}
		</div>
	)
}
