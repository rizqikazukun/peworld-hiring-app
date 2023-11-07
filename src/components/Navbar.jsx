/* eslint-disable @next/next/no-img-element */
import React from 'react'


export default function Navbar() {
	return (
		<nav>
			<div className='container mx-auto flex flex-row justify-between my-5'>

				<div id='nav-logo' className='flex justify-center' style={{ width: '160px', minWidth: '160px' }}>
					<img src="/logo-purple.svg" className='w-full px-1' alt="logo" />
				</div>

				<div id='nav-item-right' className='flex flex-row gap-2 items-center'>

					<button className='login-button h-10 desktop-component'>
						Login
					</button>

					<button className='register-button h-10 desktop-component'>
						Login
					</button>

					<button className='menu-button flex h-10 mobile-component' style={{width: '40px', height: '40px', minWidth: '40px'}}>
						<img className=' m-auto' src="/burger-menu.svg" alt="menu" style={{width: '100%'}}/>
					</button>

				</div>

			</div>

		</nav>
	)
}
