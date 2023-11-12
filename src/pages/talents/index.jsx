/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const pageInfo = {
	title: 'Talent List | Peworld'
}

export default function TalentList(props) {

	const [listTalent, setListTalent] = React.useState([])
	const [currentPage, setCurrentPage] = React.useState(1)
	const [dataLength, setDataLength] = React.useState(6)
	const [start, setStart] = React.useState(0)
	const [end, setEnd] = React.useState(dataLength)

	React.useEffect(() => {

		if (currentPage !== 1) {
			setEnd(dataLength * currentPage)
			setStart(dataLength * currentPage - dataLength)
			setListTalent(props.data.data.slice(start, end))
			console.log(props.data.data.slice(start, end))
		} else {
			setListTalent(props.data.data.slice(0, dataLength))
			console.log(props.data.data.slice(0, dataLength))
		}

	}, [currentPage, dataLength, end, props.data.data, start])

	return (
		<div id='page-talentList' className={poppins.className}>
			<Navbar />
			<Head>
				<title>
					{
						pageInfo.title
					}
				</title>
			</Head>
			<main className='mx-auto mt-[87px] ' >

				<div className='bg-pw-purple '>
					<div id='title-container' className='container flex mx-auto'>
						<p className='text-white font-semibold px-10 py-6 text-3xl'>
							{
								pageInfo.title
							}
						</p>
					</div>

				</div>
				<div id='content-container' className='mx-auto flex flex-col bg-pw-gray10'>

					<div className='container flex max-sm:flex-col max-sm:items-center max-sm:text-center flex-warp gap-2 p-5 bg-white max-sm:mr-5 mx-auto my-6 shadow-md max-sm:rounded-3xl rounded-full mt-10'>
						<input className='w-full sm:block focus:outline-none max-sm:placeholder:text-center' type="search" placeholder='Search for any skill' name="" id="" />
						<p className='border-l-2 max-sm:border-none border-pw-gray20 p-2 text-pw-gray40 max-sm:w-full hover:text-pw-gray60'>
							<button>Kategori</button>
						</p>
						<button className='py-2 px-6 max-sm:w-full rounded-full bg-pw-purple hover:bg-pw-purple-hover font-bold text-white'>Search</button>
					</div>


					<div className='container mx-auto grid max-lg:grid-cols-2 grid-cols-4 mb-10'>

						{listTalent?.length === 0 ? <p>No talent found</p> :
							listTalent?.map((talent, index) => {
								return (
									<div key={index} className='grid max-lg:grid-cols-3 grid-cols-4 col-span-2 p-5 bg-white shadow-md rounded-lg m-2'>

										{/* talent-list-photo */}
										<div className='col-span-1 flex items-center'>
											<img className='max-sm:h-[160px] h-[100%] w-[100%] object-cover object-top rounded-md aspect-square shadow-md'
												src={talent.photo} alt={`photo ${talent.last_name}`} />
										</div>

										{/* Talent List info */}
										<div className='max-lg:col-span-2 col-span-3 p-5 h-fit flex flex-col max-lg:gap-1 lg:gap-2'>
											<p className='font-semibold  text-xl'>{`${talent?.first_name} ${talent?.last_name === talent?.first_name ? "" : talent?.last_name}`}</p>
											<p className='text-sm text-pw-gray60'>{talent?.job_title}</p>
											<p className='text-sm text-pw-gray60'> <img className='inline my-[-1px]' src="/assets/icons/location.svg" alt="icon location" /> {talent?.location}</p>
											<div className='flex flex-wrap gap-2 text-white'>{talent?.skills?.map((skill, index) => (
												<span key={index} className='p-1 bg-pw-orange rounded shadow font-medium'>{skill}
												</span>
											))}
											</div>

											<p>Action :</p>
											<Link className=' w-fit' href={`talents/${talent.user_uid}`}>
												<button className='bg-pw-purple hover:bg-pw-purple-hover text-white rounded font-medium py-2 px-3 shadow'>
													Lihat Detail
												</button>
											</Link>

										</div>
										<div className=' col-span-4'>

										</div>
									</div>
								)
							})
						}

					</div>


					<div className='container flex mx-auto gap-2 mb-10 justify-center items-center'>
						<button className='w-[30px] h-[30px] flex
												text-white bg-white hover:bg-pw-purple-hover disabled:hover:bg-pw-gray20 rounded-full'
							disabled={currentPage === 1 ? true : false}
							onClick={() => {
								setCurrentPage(currentPage - 1)
							}}>
							<img className=' w-[30px] h-[30px] rounded-full' src="/assets/icons/prev.svg" alt="previous" />
						</button>
						{
							props.data.data === undefined ? "" :
								[...new Array(Math.ceil(props.data.data.length / dataLength)).keys()]
									.map((item, index) => {
										return (
											<button
												className='h-[40px] w-[40px] flex justify-center items-center
												text-white bg-pw-gray40 hover:bg-pw-purple-hover rounded-full
											 	disabled:bg-pw-purple-hover'
												key={index}
												disabled={item + 1 === currentPage ? true : false}
												onClick={() => {
													setCurrentPage(item + 1)
												}}>
												<p className=' font-bold'>{item + 1}</p>
											</button>
										)
									})
						}

						<button className='w-[30px] h-[30px] flex
												text-white bg-white hover:bg-pw-purple-hover disabled:hover:bg-pw-gray20 rounded-full'
							disabled={currentPage === Math.ceil(props.data.data.length / dataLength) ? true : false}
							onClick={() => {
								setCurrentPage(currentPage + 1)
							}}>
							<img className=' w-[30px] h-[30px] rounded-full' src="/assets/icons/next.svg" alt="next" />
						</button>

					</div>
				</div>

			</main>




			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.BE_URL}/api/talents`)
	const data = await res.json()
	return { props: { data } }
}