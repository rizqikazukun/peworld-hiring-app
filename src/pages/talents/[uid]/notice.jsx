/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google'

import Head from 'next/head'
import { getCookie, hasCookie } from 'cookies-next'
import { Player } from '@lottiefiles/react-lottie-player'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function Notice() {
	const [loading, setLoading] = React.useState(false)
	const router = useRouter()

	React.useEffect(() => {

	}, [])

	return (
		<div id='page-TalentDetail' className={poppins.className} style={{ backgroundColor: '#eaeaea' }} >

			<Head>
				<title>
					Notice | Peworld
				</title>
			</Head>

			<Loading trigger={loading}/>

			<Navbar />

			<div id='backgroundDecoration' className='mt-[80px] mx-auto flex flex-col w-full relative'>
				<div className='h-[40vh] w-full bg-transparent absolute z-[0]'></div>
			</div>

			<div className='container grid grid-cols-2 mx-auto my-32 max-md:mt-10'>
				<div className='max-lg:col-span-2 col-span-1 items-center self-center'>
					<Player
						autoplay
						loop
						src="https://lottie.host/971edd25-231b-48f8-9b6c-de46ab75c858/C4vmSN6HRl.json"
						style={{ height: '100%', width: '100%' }}>
					</Player>
				</div>

				<div className='max-lg:col-span-2 col-span-1 self-center'>
					<div className='flex flex-col gap-5 w-3/4 self-center mx-auto p-10'>

						<p className=' text-4xl font-bold'>Thankyou for interesting to our talent</p>

						<p>But we need verify first before send an offering to our talent.</p>

						<div className='flex gap-2'>

							<button className='w-[128px] rounded-full px-1 h-10 bg-transparent hover:bg-[#d5d5d5] border-pw-purple border-2'
								onClick={() => {
									setLoading(true)
									router.push('/login')
								}} >
								<span className=' text-pw-purple font-semibold'>Login</span>
							</button>

							<button className='w-[128px] rounded-full px-1 h-10 bg-pw-purple hover:bg-pw-purple-hover border-pw-purple border-2' 
							onClick={() => {
								setLoading(true)
								router.push('/register')
							}} >
								<span className=' text-white font-semibold'>Register</span>
							</button>

						</div>
					</div>

				</div>
			</div>

			<Footer />

		</div>
	)
}


export async function getServerSideProps({ params, req, res }) {

	const { uid } = params

	if (hasCookie('user', { req, res }) &&
		hasCookie('token', { req, res })) {
		return {
			redirect: {
				permanent: false,
				destination: `/talents/${uid}/hire`
			}
		}
	}

	return { props: {} }
}