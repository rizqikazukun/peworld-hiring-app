/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function Navbar() {
	const [expand, setExpand] = React.useState(false)

	React.useEffect(() => {

	})

	return (
		<div className={poppins.className}>
			<div id='Navbar' className='container mx-auto z-[9999] shadow-sm'>
				<div className='Navbar-content container flex flex-row justify-between px-8 py-3 max-md:m-2 mx-auto'>

					<div id='nav-item-left' className='flex items-center gap-10'>
						<Link href="/">
							<div id='nav-logo' className='flex justify-center' style={{ width: '160px', minWidth: '160px' }}>

								<img src="/peworld-purple-wo-bg.svg" className='w-full px-1' alt="logo" />
							</div>
						</Link>

						<Link href="/talents">
							<p className=' max-lg:hidden text-pw-purple font-semibold'>
								Talent List
							</p>
						</Link>




					</div>

					<div id='nav-item-right' className='flex flex-row gap-2 items-center'>

						<button className='login-button h-10 max-desktop:hidden hover:bg-pw-white-hover'>
							Login
						</button>

						<button className='register-button h-10 max-desktop:hidden hover:bg-pw-purple-hover'>
							Register
						</button>

						<button className='hidden menu-button h-10 max-desktop:flex mr-3' style={{ width: '40px', height: '40px', minWidth: '40px' }}
							onClick={(e) => {
								if (!expand) {
									setExpand(true)
								} else {
									setExpand(false)
								}

							}}>
							<img className=' m-auto' src="/burger-menu.svg" alt="menu" style={{ width: '100%' }} />
						</button>

					</div>

				</div>

				<div id='mobile-nav' className='lg:hidden absolute h-screen w-screen bg-white' hidden={!expand}>

					<div className='container mx-auto px-10'>

						<div className='container mx-auto text-black h-20 flex flex-col justify-center items-center align mt-[150px]'>
							<Link href='/'>
								<div className='border-b-2 py-4 w-screen flex justify-center'
									onClick={() => {
										setExpand(false)
									}}>
									<p className=' text-[3vh] font-bold text-pw-purple'>
										Home
									</p>
								</div>
							</Link>
							<Link href='/talents'>
								<div className='border-b-2 py-4 w-screen flex justify-center'
									onClick={() => {
										setExpand(false)
									}}>
									<p className=' text-[3vh] font-bold text-pw-purple'>
										List Talent
									</p>
								</div>
							</Link>
							<Link href='/login'>
								<div className='border-b-2 py-4 w-screen flex justify-center'
									onClick={() => {
										setExpand(false)
									}}>
									<p className=' text-[3vh] font-bold text-pw-purple'>
										Login
									</p>
								</div>
							</Link>
							<Link href='/register'>
								<div className='border-b-2 py-4 w-screen flex justify-center'
									onClick={() => {
										setExpand(false)
									}}>
									<p className=' text-[3vh] font-bold text-pw-purple'>
										Register
									</p>
								</div>
							</Link>
							<div className='border-b-2 py-4 w-screen flex justify-center cursor-pointer'
								onClick={() => {
									setExpand(false)
								}}>
								<p className=' text-[3vh] font-bold text-pw-purple'>
									Close
								</p>
							</div>

						</div>

					</div>

				</div>


			</div>
		</div>
	)
}
