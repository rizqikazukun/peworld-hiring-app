/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { Router, useRouter } from 'next/router'
import React from 'react'
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function TalentDetail(props) {
	const router = useRouter()
	const { query: { uid } } = router
	const [detail, setDetail] = React.useState({})


	React.useEffect(() => {

		if (Object.keys(detail).length === 0) {
			setDetail(props.data.data)
		}		


	}, [detail, props.data.data])



	return (
		<div id='page-TalentDetail' className={poppins.className} style={{backgroundColor: '#eaeaea'}} >
			<Navbar />

			<div id='backgroundDecoration' className='mt-[89px] mx-auto flex flex-col w-full relative'>
				<div className='h-[40vh] w-full bg-pw-purple absolute z-[0]'></div>
			</div>

			<div className='container mx-auto grid grid-cols-6 mt-14 mb-10'>
				<div className='max-lg:col-span-6 col-span-2 bg-white p-10 m-5 rounded-xl shadow-xl z-10 flex flex-col gap-5'>
					<img src={detail?.photo} alt={detail?.last_name} className='w-[200px] h-[200px] object-cover object-top rounded-full self-center shadow-xl' />
					<div>
						<p>{`${detail?.first_name} ${detail?.last_name}`}</p>
						<p>{detail?.job_title}</p>
						<p className='text-sm text-pw-gray60'> <img className='inline my-[-1px]' src="/assets/icons/location.svg" alt="icon location" /> {detail?.location}</p>
						<p>{detail?.job_time_preferece}</p>
						<p>{detail?.sort_description}</p>
					</div>
					<button className='bg-pw-purple hover:bg-pw-purple-hover text-white rounded font-medium py-2 shadow-md'>
						Hire
					</button>

					<div className='flex flex-col gap-3'>
						<p>Skills</p>
						<div className='flex flex-wrap gap-2 text-white'>
							{
								detail?.skills?.map((skill, index) => (
									<span key={index} className='p-1 bg-pw-orange rounded shadow font-medium'>
										{skill}
									</span>
								))
							}
						</div>
					</div>
					<div className='flex flex-col gap-2'>
						<h3>Contact</h3>
						{
							detail.social === undefined ? "" : Object.entries(detail.social).map((item, index) => {
								const [key, value] = item

								let Lable
								if (key === 'instagram') {
									Lable = <span><img className=' inline' src="/assets/icons/instagram.svg" alt="instagram" /> Instagram </span>
								} else if (key === 'github') {
									Lable = <span><img className=' inline' src="/assets/icons/github.svg" alt="github" /> Github </span>
								} else if (key === 'gitlab') {
									Lable = <span><img className=' inline' src="/assets/icons/gitlab.svg" alt="gitlab" /> Gitlab </span>
								} else if (key === 'email') {
									Lable = <span><img className=' inline' src="/assets/icons/email.svg" alt="email" /> Email </span>
								} else {
									Lable = <span><img className=' inline' src="/assets/icons/other.svg" alt={key} /> {key} </span>
								}

								return (
									<p key={index}>{Lable}{`: ${value} `}</p>
								)
							})
						}

					</div>



				</div>

				<div className='max-lg:col-span-6 col-span-4 bg-white p-10 m-5 rounded-xl shadow-xl z-10'>

				</div>

			</div>

			<Footer />
		</div>
	)
}


export async function getServerSideProps({ params }) {
	const { uid } = params
	const res = await fetch(`${process.env.BE_URL}/api/talents?uid=${uid}`)
	const data = await res.json()
	return { props: { data } }
}