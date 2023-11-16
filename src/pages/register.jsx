/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import InputText from '@/components/input/InputText'
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function Register() {
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


				<div id='right-content' className='max-lg:w-screen flex flex-col w-[50vw] max-sm:p-2 max-sm:mt-20 max-lg:mt-10 p-14 justify-center'>
					<div className='flex flex-col h-full gap-8 overflow-y-auto'>


						{/* Register title */}
						<div className='flex flex-col gap-3'>
							<p className=' text-4xl font-semibold'>
								Halo, Pewpeople
							</p>
							<p>
								Temukan talent berbakat & terbaik di berbagai bidang keahlian
							</p>
						</div>

						{/* Register Form */}

						<InputText id='name' labelName='Full Name' />
						<InputEmail />
						<InputText id='company' labelName='Company Name' />
						<InputText id='position' labelName='Position' />
						<InputText id='phone' labelName='Phone Number' />
						<InputPassword />
						<InputPassword id='password-confirm' labelName='Comfirm Password' />

						<button className=' bg-pw-orange hover:bg-pw-orange-hover block rounded-lg p-2'>
							<span className='text-white'>Register</span>
						</button>

						<div className='flex justify-center'>
							<p>Anda sudah punya akun?
								<Link href='/login'>
									<span className=' text-pw-orange'>
										{" "} Masuk disini
									</span>
								</Link>
							</p>
						</div>

					</div>


				</div>
			</div>
		</div>
	)
}
