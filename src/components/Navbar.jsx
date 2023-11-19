/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'
import NavbarMobileItems from './NavbarMobileItems'
import { deleteCookie, hasCookie } from 'cookies-next'
import Loading from './Loading'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Navbar() {
	const [expand, setExpand] = React.useState(false)
	const [user, setUser] = React.useState(undefined)
	const [login, setLogin] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {

		// fix hydration issue
		// https://github.com/vercel/next.js/discussions/17443
		setLogin((hasCookie('user') && hasCookie('token')) ?? false)

	}, [loading])

	return (
		<div className={poppins.className}>

			<Loading trigger={loading} />

			<div id='navbar' className='container mx-auto z-[9998] fixed max-w-full shadow top-0 bg-white'>

				<div className='container flex flex-row justify-between px-4 py-2 mx-auto'>

					<div id='nav-item-left' className='flex items-center lg:gap-10'>

						<div id='nav-logo' className='flex justify-center h-[64px] w-[160px] cursor-pointer'
							onClick={() => router.push('/')}>
							<img src="/peworld-purple-wo-bg.svg" className='w-full' alt="logo" />
						</div>


						<p className=' max-lg:hidden text-pw-purple font-semibold cursor-pointer'
							onClick={() => router.push('/talents')}>
							Talent List
						</p>

					</div>

					<div id='nav-item-right' className='flex flex-row gap-2 items-center'>

						{
							!login ? '' :
								<button className='flex items-center gap-5 p-2 w-fit h-12 rounded-full max-lg:hidden bg-white
												 text-pw-purple hover:bg-pw-gray5'
									onClick={() => {
										deleteCookie('user')
										deleteCookie('token')
										setUser(undefined)
										router.reload()
									}}
								>
									Logout
									<img className='h-full object-cover object-top rounded-full' src='/assets/icons/profile.svg' alt="" />
								</button>
						}

						<button className='w-[128px] rounded-full px-1 h-10 max-lg:hidden bg-white hover:bg-pw-white-hover border-pw-purple border-2'
							onClick={() => router.push('/login')} hidden={login}>
							<span className=' text-pw-purple font-semibold'>Login</span>
						</button>

						<button className='w-[128px] rounded-full px-1 h-10 max-lg:hidden  bg-pw-purple hover:bg-pw-purple-hover border-pw-purple border-2' onClick={() => router.push('/register')} hidden={login}>
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

							{
								login ?
									<img className='m-auto w-full rounded-full' src='/assets/icons/profile.svg' alt="menu" /> :
									<img className='m-auto w-full' src="/burger-menu.svg" alt="menu" />
							}

						</button>

					</div>

				</div>

				<div id='navbar-mobile' className='lg:hidden absolute h-screen w-screen bg-white' hidden={!expand}>

					<div className='container mx-auto px-6'>

						<div className='h-screen w-full flex flex-col items-center'>

							<NavbarMobileItems pageName='Home' onClick={() => {
								setExpand(false)
								router.push('/')
							}} />

							<NavbarMobileItems pageName='Talent List' onClick={() => {
								setExpand(false)
								router.push('/talents')
							}} />

							{
								login ? '' :
									<NavbarMobileItems pageName='Login' onClick={() => {
										setExpand(false)
										router.push('/login')
									}} />
							}

							{
								login ? '' :
									<NavbarMobileItems pageName='Register' onClick={() => {
										setExpand(false)
										router.push('/register')
									}} />
							}

							{
								!login ? '' :
									<NavbarMobileItems pageName='Logout' onClick={() => {
										deleteCookie('user')
										deleteCookie('token')
										setUser(undefined)
										setExpand(false)
										router.reload()
									}} />
							}

							<NavbarMobileItems pageName='Close' onClick={() => {
								setExpand(false)
							}} />


						</div>

					</div>

				</div>

			</div>

		</div>
	)
}
