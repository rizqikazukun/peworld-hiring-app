/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google'
import E404 from '@/components/E404'
import InputText from '@/components/input/InputText'
import InputEmail from '@/components/input/InputEmail'
import InputTextArea from '@/components/input/InputTextArea'


const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function TalentDetail(props) {
	const [detail, setDetail] = React.useState({})

	console.log(props)

	React.useEffect(() => {

		if (props.user_uid === undefined) {
			setDetail(props.data.data)
		}


	}, [detail, props.data.data, props.user_uid])



	return (
		<div id='page-TalentDetail' className={poppins.className} style={{ backgroundColor: '#eaeaea' }} >
			<Navbar />

			<div id='backgroundDecoration' className='mt-[80px] mx-auto flex flex-col w-full relative'>
				<div className='h-[40vh] w-full bg-transparent absolute z-[0]'></div>
			</div>

			{
				props.data.status === 404 ?
					<div className='container mx-auto grid grid-cols-6 my-10'>
						<E404
							className='col-span-6 bg-white p-10 m-5 rounded-xl shadow-xl z-10 flex flex-col gap-10 items-center justify-center  min-h-[500px]'
							message='Sorry, No Talent Found.' />
					</div> :
					<div className='container mx-auto grid grid-cols-6 my-10'>

						<div className='max-lg:col-span-6 col-span-2 bg-white p-10 m-5 rounded-xl shadow-xl z-10 flex flex-col gap-8'>

							<img id='talent-photo' src={detail?.photo} alt={detail?.fullname} className='w-[200px] h-[200px] object-cover object-top rounded-full self-center shadow-xl' />

							<div id='talent-info' className='flex flex-col gap-2'>
								<p className='font-semibold  text-xl'>{`${detail?.fullname ?? ""}`}</p>
								<p className='text-sm text-pw-gray60'>{detail?.job}</p>
								<p className='text-sm text-pw-gray60'>{detail?.job_time_preferece}</p>
								<p className='text-sm text-pw-gray60'> <img className='inline my-[-1px]' src="/assets/icons/location.svg" alt="icon location" /> {detail?.location}</p>
								<p className='text-sm text-pw-gray60 max-sm:text-justify'>{detail?.desc}</p>
							</div>

							<div id='talent-skills' className='flex flex-col gap-2'>
								<h3 className='font-semibold  text-xl'>Skills</h3>
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

							<div id='talent-contact' className='flex flex-col gap-2'>

								<h3 className='font-semibold  text-xl'>Contact</h3>
								{
									detail?.socmed === undefined ? "" : Object.entries(detail.socmed).map((item, index) => {

										const [key, value] = item

										let Lable
										if (key === 'instagram') {
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/instagram.svg" alt="instagram" /> Instagram </span>
										} else if (key === 'github') {
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/github.svg" alt="github" /> Github </span>
										} else if (key === 'gitlab') {
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/gitlab.svg" alt="gitlab" /> Gitlab </span>
										} else if (key === 'email') {
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/email.svg" alt="email" /> Email </span>
										} else {
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/other.svg" alt={key} /> {key} </span>
										}

										return (
											<p key={index} className='text-sm text-pw-gray60'>{Lable}{`: ${value} `}</p>
										)
									})
								}
							</div>

						</div>

						<div className=' max-lg:order-first max-lg:col-span-6 col-span-4 p-10 m-5 rounded-xl z-10 flex flex-col gap-3'>

							<h1 className='text-4xl font-bold'>{`${detail.fullname}`}</h1>
							<p>{detail.desc}</p>

							<InputText id='subject' labelName='Offering Title' />
							<InputText id='name' labelName='Full Name' />
							<InputEmail />
							<InputText id='phone' labelName='Phone Number' />
							<InputTextArea id='message' labelName='Message' rows='5' />

							<button className='p-2 my-2 rounded-lg bg-pw-orange hover:bg-pw-orange-hover'>
								<span className='text-white text-lg'>
									Send
								</span>
							</button>

						</div>

					</div>
			}

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