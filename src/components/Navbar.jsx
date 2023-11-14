/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
import { Router, useRouter } from 'next/router'
import MobileNavbarLink from './MobileNavbarLink'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
	const [expand, setExpand] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {

	})

	return (
		<div className={poppins.className}>
			<div id='navbar' className='container mx-auto z-[9999] fixed max-w-full shadow top-0 bg-white'>

				<div className='container flex flex-row justify-between px-4 py-2 mx-auto'>

					<div id='nav-item-left' className='flex items-center lg:gap-10'>
						<Link href="/">
							<div id='nav-logo' className='flex justify-center h-[64px] w-[160px]'>
								<img src="/peworld-purple-wo-bg.svg" className='w-full' alt="logo" />
							</div>
						</Link>

						<Link href="/talents">
							<p className=' max-lg:hidden text-pw-purple font-semibold'>
								Talent List
							</p>
						</Link>

					</div>

					<div id='nav-item-right' className='flex flex-row gap-2 items-center'>

						<button className='w-[128px] rounded-full px-1 h-10 max-lg:hidden bg-white hover:bg-pw-white-hover border-pw-purple border-2'>
							<span className=' text-pw-purple font-semibold'>Login</span>
						</button>

						<button className='w-[128px] rounded-full px-1 h-10 max-lg:hidden  bg-pw-purple hover:bg-pw-purple-hover border-pw-purple border-2'>
							<span className=' text-white font-semibold'>Register</span>
						</button>

						<button className='max-lg:flex hidden menu-button h-10 w-10'
							onClick={() => {
								if (!expand) {
									setExpand(true)
								} else {
									setExpand(false)
								}

							}}>
							<img className='m-auto w-full' src="/burger-menu.svg" alt="menu" />
						</button>

					</div>

				</div>

				<div id='navbar-mobile' className='lg:hidden absolute h-screen w-screen bg-white' hidden={!expand}>

					<div className='container mx-auto px-6'>

						<div className='h-screen w-full flex flex-col items-center'>

							<MobileNavbarLink pageName='Home' onClick={() => {
								setExpand(false)
								router.push('/')
							}} />

							<MobileNavbarLink pageName='Talent List' onClick={() => {
								setExpand(false)
								router.push('/talents')
							}} />

							<MobileNavbarLink pageName='Login' onClick={() => {
								setExpand(false)
								router.push('/login')
							}} />

							<MobileNavbarLink pageName='Register' onClick={() => {
								setExpand(false)
								router.push('/register')
							}} />

							<MobileNavbarLink pageName='Close' onClick={() => {
								setExpand(false)
							}} />


						</div>

					</div>

				</div>


			</div>
		</div>
	)
}
