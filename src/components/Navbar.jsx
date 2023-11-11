/* eslint-disable @next/next/no-img-element */
import React from 'react'


export default function Navbar() {
	return (
		<div id='Navbar' className='container mx-auto z-[9999]'>
			<div className='Navbar-content container flex flex-row justify-between px-8 py-4 m-2 mx-auto'>

				<div id='nav-item-left'>
					<div id='nav-logo' className='flex justify-center' style={{ width: '160px', minWidth: '160px' }}>
						<img src="/peworld-purple-wo-bg.svg" className='w-full px-1' alt="logo" />
					</div>

				</div>

				<div id='nav-item-right' className='flex flex-row gap-2 items-center'>

					<button className='login-button h-10 max-desktop:hidden hover:bg-pw-white-hover'>
						Login
					</button>

					<button className='register-button h-10 max-desktop:hidden hover:bg-pw-purple-hover'>
						Register
					</button>

					<button className='hidden menu-button h-10 max-desktop:flex' style={{ width: '40px', height: '40px', minWidth: '40px' }}>
						<img className=' m-auto' src="/burger-menu.svg" alt="menu" style={{ width: '100%' }} />
					</button>

				</div>

			</div>


		</div>
	)
}
