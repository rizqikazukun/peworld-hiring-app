/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google'
import E404 from '@/components/E404'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Loading from '@/components/Loading'
import E4042 from '@/components/E4042'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function TalentDetail(props) {
	const [detail, setDetail] = React.useState({})
	const [loading, setLoading] = React.useState(false)
	const router = useRouter()

	console.log(props)

	React.useEffect(() => {

		if (props.user_uid === undefined) {
			setDetail(props.data.data)
		}


	}, [detail, props.data.data, props.user_uid])



	return (
		<div id='page-TalentDetail' className={poppins.className} style={{ backgroundColor: '#eaeaea' }} >

			<Head>
				<title>
					{props.data.data.fullname} | Peworld
				</title>
			</Head>

			<Loading trigger={loading} />

			<Navbar />

			<div id='backgroundDecoration' className='mt-[80px] mx-auto flex flex-col w-full relative'>
				<div className='h-[40vh] w-full bg-pw-purple absolute z-[0]'></div>
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

							<button id='button-hire' className='bg-pw-purple hover:bg-pw-purple-hover text-white rounded font-semibold py-2 shadow-md'
								onClick={() => {
									setLoading(true)
									router.push(`/talents/${detail.user_uid}/hire`)
								}}>
								Hire
							</button>

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
										let link
										if (key === 'instagram') {
											link = 'https://www.instagram.com/'
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/instagram.svg" alt="instagram" /> Instagram </span>
										} else if (key === 'github') {
											link = 'https://github.com/'
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/github.svg" alt="github" /> Github </span>
										} else if (key === 'gitlab') {
											link = 'https://gitlab.com/'
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/gitlab.svg" alt="gitlab" /> Gitlab </span>
										} else if (key === 'email') {
											link = 'mailto:'
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/email.svg" alt="email" /> Email </span>
										} else {
											link = ''
											Lable = <span><img className='inline h-[20px]' src="/assets/icons/other.svg" alt={key} /> {key} </span>
										}

										return (
											<a key={index} href={link + value} target={key === 'email' ? '' : 'blank'}>
												<p className='text-sm text-pw-gray60'>{Lable}{`: ${value} `}</p>
											</a>
										)
									})
								}
							</div>

							{
								String(detail.fullname).includes('Rizqi') ? "" :
									<div id='disclaimer' >
										<p className=' text-xs text-pw-gray60 font-bold'>Disclaimer :</p>
										<p className=' text-xs text-pw-gray40'>
											The name, description, and other content is not real name and data.
											The photo is an <a className=' text-sky-400' href="https://www.freepik.com/ai/images">
												AI generated Image By Freepik.</a> and just for educational purpose.
										</p>
									</div>
							}

						</div>

						<div className='max-lg:col-span-6 col-span-4 bg-white p-10 m-5 rounded-xl shadow-xl z-10'>
							<div className='w-full flex p-2 m-2'>
								<p className='font-bold text-pw-purple text-2xl'>
									Portfolio
								</p>
							</div>

							<div className='flex flex-wrap'>
								{
									detail?.portfolio === undefined ?
										<div className='flex mx-auto p-6 max-w-[420px]'>
											<E4042 message='Sorry, it seems the user has not updated their portfolio.' className='text-center' />
										</div> :
										detail?.portfolio.map((project, index) => {
											return (
												<a key={index} className='w-[30%] bg-white m-2 shadow border border-pw-gray10 rounded-xl flex flex-col items-center gap-5 justify-between p-4 h-fit' href={project.link} target='blank'>

													<div className=''>
														<img
															className='max-w-[100%] rounded-lg'
															src={project.image || "https://academy.alterra.id/blog/wp-content/uploads/2022/02/1904.i402.011_Web-development-isometric-concept-infographics-2048x1475.jpg"}
															alt={`Project ${project.name}`} />
													</div>

													<div className='flex'>
														{
															project.tech_stack.map((stack, index) => {
																return (
																	<span key={index}
																		className='p-1 m-1 shadow rounded-md text-pw-gray40 text-sm font-semibold'>
																		{stack}
																	</span>
																)
															})
														}
													</div>

													<p className='text-center'>{project.name}</p>

												</a>
											)
										})

								}
							</div>
						</div>

					</div>
			}

			<Footer />
		</div>
	)
}


export async function getServerSideProps({ params }) {
	const { uid } = params
	const res = await fetch(`${process.env.BASE_URL}/api/talents?uid=${uid}`)
	const data = await res.json()
	return { props: { data } }
}