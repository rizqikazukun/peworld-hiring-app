/* eslint-disable @next/next/no-img-element */
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import { Poppins } from 'next/font/google'
import E404 from '@/components/E404'
import InputText from '@/components/input/InputText'
import InputTextArea from '@/components/input/InputTextArea'
import Head from 'next/head'
import { getCookie, hasCookie } from 'cookies-next'
import axios from 'axios'
import AuthButton from '@/components/button/AuthButton'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export default function TalentDetail(props) {
	const [detail, setDetail] = React.useState({})

	const defaultTitle = 'Offering Pekerjaan'
	const defaultDescription = `Halo ${props.data.data.fullname}, perkenalkan saya ${props.recruiter.fullname}, ${props.recruiter.job_title} dari ${props.recruiter.company} ingin menawarkan posisi "_____", jika bersedia silahkan hubungi nomor berikut : ${props.recruiter.phone}`

	const [subject, setSubject] = React.useState(defaultTitle)
	const [description, setDescription] = React.useState(defaultDescription)
	const [loading, setLoading] = React.useState(false)
	const [sent, setSent] = React.useState(false)

	// const [inputErr, setInputErr] = React.useState(undefined)
	// const [authErr, setAuthErr] = React.useState(undefined)

	const handleOffer = async () => {
		try {
			setLoading(true)

			await axios({
				method: 'post',
				url: `${props.BE_URL}/contact`,
				data: {
					to: detail?.socmed?.email,
					toName: detail?.fullname,
					sender: '',
					subject,
					description
				},
				headers: {
					Authorization: props.token
				}
			})

			setSent(true)

		} catch (error) {

			console.log(error)

			// if (error.response.status === 422) {
			// 	setInputErr(error.response.data.messages)
			// } else if (error.response.status === 400) {
			// 	setAuthErr(error.response.data.messages)
			// }

		} finally {
			setLoading(false)
		}
	}

	React.useEffect(() => {

		if (props.user_uid === undefined) {
			setDetail(props.data.data)
		}

		if (sent) {
			setTimeout(() => {
				setSent(false)
			}, 5000)
		}


	}, [detail, props.data.data, props.user_uid, sent])



	return (
		<div id='page-TalentDetail' className={poppins.className} style={{ backgroundColor: '#eaeaea' }} >

			<Head>
				<title>
					Hire | Peworld
				</title>
			</Head>

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

						<div className=' max-lg:order-first max-lg:col-span-6 col-span-4 p-10 m-5 rounded-xl z-10 flex flex-col gap-3'>

							<h1 className='text-4xl font-bold'>{`Hubungi ${detail.fullname}`}</h1>
							<p>{detail.desc}</p>

							<InputText id='subject' labelName='Offering Title'
								defaultValue={defaultTitle}
								onChange={e => setSubject(e.target.value)} />

							<InputTextArea id='message' labelName='Message' rows='8'
								defaultValue={defaultDescription}
								onChange={e => setDescription(e.target.value)} />

							<div className='p-3 rounded-md bg-emerald-200 text-center' hidden={sent ? false : true}>
								Offering Sent
							</div>

							<AuthButton onClick={handleOffer} disabled={loading} loadingIndicator={loading} text='Send' />

						</div>

					</div>
			}

			<Footer />
			
		</div>
	)
}


export async function getServerSideProps({ params, req, res }) {

	const { uid } = params

	if (!(hasCookie('user', { req, res }) &&
		hasCookie('token', { req, res }))) {
		return {
			redirect: {
				permanent: false,
				destination: `/talents/${uid}`
			}
		}
	}

	const recruiter = JSON.parse(getCookie('user', { req, res }))
	const token = getCookie('token', { req, res })

	const result = await fetch(`${process.env.BASE_URL}/api/talents?uid=${uid}`)
	const data = await result.json()

	return { props: { data, recruiter, token, BE_URL: process.env.BE_URL } }
}