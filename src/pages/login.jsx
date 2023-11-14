/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Login() {
	return (
		<div id='Login' className={poppins.className}>

			<div className='lg:hidden'>
				<Navbar />
			</div>

			<div id='left-content' className='mx-auto flex flex-row p-10 h-screen max-lg:bg-white bg-pw-gray5'>

				<div className='max-lg:hidden flex flex-col justify-between w-[50vw] bg-pw-purple-hover  
								 bg-[url("/assets/images/banner-auth.png")] 
								bg-center bg-cover bg-blend-soft-light p-14'>

					<Link href='/'>
						<img className=' w-40' src="/peworld-white-wo-bg.svg" alt="logo peworld" />
					</Link>

					<div className='mx-auto p-10 w-5/6'>
						<p className=' items-center align-center text-5xl font-semibold text-white leading-normal'>
							Temukan talent berbakat & terbaik di berbagai bidang keahlian
						</p>
					</div>

					<div>
						{/* it just div dummy for justify content between */}
					</div>

				</div>


				<div id='right-content' className='max-lg:w-screen flex flex-col w-[50vw] max-sm:p-2 p-14 gap-8 justify-center'>


					{/* login title */}
					<div className='flex flex-col gap-3'>
						<p className=' text-4xl font-semibold'>
							Halo, Pewpeople
						</p>
						<p>
							Temukan talent berbakat & terbaik di berbagai bidang keahlian
						</p>
					</div>

					{/* Login Form */}
					<div className='flex flex-col gap-2'>
						<label htmlFor="email">Email</label>
						<input id='email' type="email" placeholder='Masukan alamat email'
							className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2 h-10' />
					</div>
					<div className='flex flex-col gap-2'>
						<label htmlFor="password">Password</label>
						<input id='password' type="password" placeholder='Masukan password'
							className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2 h-10' />
					</div>

					<p className=' text-right'>Lupa kata sandi?</p>
					<button className=' bg-pw-orange hover:bg-pw-orange-hover h-10 rounded-lg'>
						<span className='text-white font-semibold'>login</span>
					</button>

					<div className='flex justify-center'>
						<p>Anda belum punya akun?
							<Link href='/register'>
								<span className=' text-pw-orange'>
									{" "} Daftar disini
								</span>
							</Link>
						</p>
					</div>


				</div>
			</div>
		</div>
	)
}
