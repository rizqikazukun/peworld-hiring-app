/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation'
import E404 from '@/components/E404'
import E4042 from '@/components/E4042'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

const pageInfo = {
	title: 'Talent List | Peworld'
}

export default function TalentList(props) {
	const router = useRouter()
	const searchParams = useSearchParams()

	// Pagination Options
	const [page, setPage] = React.useState(searchParams.get('page') || 1)
	const [pageCount, setPageCount] = React.useState(0)
	const [length, setLength] = React.useState(searchParams.get('length') || 6)
	const [start, setStart] = React.useState(0)
	const [end, setEnd] = React.useState(length)

	const [search, setSearch] = React.useState(searchParams.get('search') || '')
	const [talentList, setTalentList] = React.useState([])
	const [searchFilter, setSearchFilter] = React.useState(false)

	const createQueryString = React.useCallback(
		(name, value) => {
			const params = new URLSearchParams(searchParams)
			params.set(name, value)
			return params.toString()
		},
		[searchParams]
	)

	React.useEffect(() => {

		const displayData = []

		// search filter and get by querry filter
		props.data.data.map((item) => {
			if (searchParams.get('filter') === 'location') {
				if (item.location.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					displayData.push(item)
				}
			} else if (searchParams.get('filter') === 'job') {
				if (item.job.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					displayData.push(item)
				}
			} else if (searchParams.get('filter') === 'name') {
				if (String(`${item.fullname} `).toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					displayData.push(item)
				}
			} else if (searchParams.get('filter') === 'skills') {
				if (item.skills.join(', ').toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					displayData.push(item)
				}
			} else {
				if (item.location.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
					String(`${item.fullname} `).toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
					item.job.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
					item.skills.join(', ').toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
					displayData.push(item)
				}
			}
		})

		// pagination display 
		setPageCount(Math.ceil(displayData.length / length))

		// for pagination display items
		if (page !== 1) {
			setEnd(length * page)
			setStart(length * page - length)
			setTalentList(displayData.slice(start, end))
			console.log(displayData.slice(start, end))
		} else {
			setTalentList(displayData.slice(0, length))
			console.log(displayData.slice(0, length))
		}

		// Hide Search Filter if mousedown outside the element
		const concernedElement = document.querySelector("#searchFilter")
		document.addEventListener("mousedown", (event) => {
			if (!concernedElement?.contains(event.target)) {
				setSearchFilter(false)
			}
		})

	}, [end, length, page, props.data.data, search, searchParams, start])

	return (
		<div id='page-talentList' className={poppins.className}>
			<Navbar/>
			<Head>
				<title>
					{
						pageInfo.title
					}
				</title>
			</Head>
			<main className='mx-auto mt-[80px] ' >

				<div className='bg-pw-purple '>
					<div id='title-container' className='container flex mx-auto'>
						<p className='text-white font-semibold px-10 py-6 text-3xl'>
							Talent List
						</p>
					</div>
				</div>

				<div id='content-container' className='mx-auto flex flex-col bg-pw-gray10'>
					{/* start of search bar */}
					<div id='search-bar' className=' container mx-auto flex flex-col items-center' >
						<div className='container flex max-sm:flex-col max-sm:items-center max-sm:text-center flex-warp 
										gap-2 p-5 bg-white max-sm:mr-5 mx-auto my-6 shadow-md max-sm:rounded-3xl rounded-full mt-10'>

							<input className='w-full sm:block focus:outline-none max-sm:text-center'
								type="search" placeholder='Search for any skill'
								// value={searchParams.get('search') ?? ''}
								onChange={(e) => {
									setSearch(e.target.value)
									router.push(`${window.location.pathname}?${createQueryString('search', e.target.value)}`)
								}} />

							<p className='border-l-2 max-sm:border-none border-pw-gray20 p-2 text-pw-gray40 max-sm:w-full hover:text-pw-gray60'>
								<button onClick={() => {
									if (searchFilter === false) {
										setSearchFilter(true)
									} else {
										setSearchFilter(false)
									}
								}}>
									Filter
								</button>
							</p>

							<button className='py-2 px-6 max-sm:w-full rounded-full bg-pw-purple hover:bg-pw-purple-hover font-bold text-white '
								onClick={() => {
									setPage(1)
									router.push(`${window.location.pathname}?${createQueryString('page', '1')}`)
								}}>
								Search

							</button>

						</div>

						<div id='searchFilter' className='container absolute h-fit max-md:mt-52 mt-32
						 bg-white shadow-lg mx-auto rounded-[20px] p-5 flex-col z-50' hidden={!searchFilter}>

							<div className='flex justify-between'>
								<p className=' text-xl'>Filter</p>
								<button className=' text-sm font-bold rounded-full
							 		bg-pw-purple hover:bg-pw-purple-hover text-white px-5 py-1'
									onClick={() => {
										if (searchFilter === false) {
											setSearchFilter(true)
										} else {
											setSearchFilter(false)
										}
									}}>
									Hide
								</button>
							</div>

							<div className='grid max-sm:grid-cols-1 grid-cols-2 p-5 gap-2'>
								<div className='flex flex-col justify-center gap-2'>
									<p>Search by :</p>
									<select name="" id="" className='bg-white rounded-full focus:border-none'
										onChange={(e) => {
											router.push(`${window.location.pathname}?${createQueryString('filter', e.target.value)}`)
										}}>
										<option value="">default</option>
										<option value="skills">Skill</option>
										<option value="location">Location</option>
										<option value="job">Job Title</option>
										<option value="name">name</option>
									</select>
								</div>
								
								<div className='flex flex-col justify-center gap-2'>
									<p>Count data :</p>
									<select name="" id="" className='bg-white rounded-full focus:border-none'
										onChange={(e) => {
											setLength(e.target.value)
											router.push(`${window.location.pathname}?${createQueryString('length', e.target.value)}`)
										}}>
										<option value="6">default</option>
										<option value="4">4</option>
										<option value="6">6</option>
										<option value="8">8</option>
										<option value="10">10</option>
										<option value="12">12</option>
										<option value="14">14</option>
										<option value="16">16</option>
										<option value="18">18</option>
										<option value="20">20</option>
									</select>
								</div>

							</div>
						</div>
					</div>
					{/* end of search bar */}

					{/* start of talent list */}
					<div className='container mx-auto grid max-lg:grid-cols-2 grid-cols-4 mb-10'>

						{searchParams.get('page') > 1 && talentList.length === 0 ?
							<div className=' col-span-4 flex justify-center items-center p-6'>
								<E4042 message='Please click search button' className=' text-center' />
							</div> :
							talentList?.length === 0 ?
								<div className=' col-span-4 flex justify-center p-6'>
									<E404 message='Sorry, No Talent Found' className=' text-center' />
								</div> :
								talentList?.map((talent, index) => {
									return (
										<div key={index} className='grid max-lg:grid-cols-3 grid-cols-4 col-span-2 p-5 bg-white shadow-md rounded-lg m-2'>

											{/* talent-list-photo */}
											<div className='col-span-1 flex items-center'>
												<img className='max-sm:h-[160px] h-[100%] w-[100%] object-cover object-top rounded-md aspect-square shadow-md'
													src={talent.photo} alt={`photo ${talent.fullname}`} />
											</div>

											{/* Talent List info */}
											<div className='max-lg:col-span-2 col-span-3 p-5 h-fit flex flex-col max-lg:gap-1 lg:gap-2'>
												<p className='font-semibold  text-xl'>{`${talent?.fullname}`}</p>
												<p className='text-sm text-pw-gray60'>{talent?.job}</p>
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
					{/* end of talent list */}

					{/* start of pagination */}
					<div className='container flex mx-auto gap-2 mb-10 justify-center items-center'>
						<button className='w-[30px] h-[30px] flex
												text-white bg-white hover:bg-pw-purple-hover disabled:hover:bg-pw-gray20 rounded-full'
							disabled={page == 1 ? true : false}
							onClick={() => {
								setPage(page - 1)
								router.push(`${window.location.pathname}?${createQueryString('page', page - 1)}`)
							}}>
							<img className=' w-[30px] h-[30px] rounded-full' src="/assets/icons/prev.svg" alt="previous" />
						</button>
						{
							props.data.data === undefined ? "" :
								[...new Array(pageCount).keys()]
									.map((item, index) => {
										return (
											<button
												className='h-[40px] w-[40px] flex justify-center items-center
												text-white bg-pw-gray40 hover:bg-pw-purple-hover rounded-full
											 	disabled:bg-pw-purple-hover'
												key={index}
												disabled={item + 1 == page ? true : false}
												onClick={() => {
													setPage(item + 1)
													router.push(`${window.location.pathname}?${createQueryString('page', item + 1)}`)
												}}>
												<p className=' font-bold'>{item + 1}</p>
											</button>
										)
									})
						}

						<button className='w-[30px] h-[30px] flex text-white bg-white hover:bg-pw-purple-hover
										  disabled:hover:bg-pw-gray20 rounded-full'
							disabled={page == pageCount ? true : talentList.length === 0 ? true : false}
							onClick={() => {
								setPage(page + 1)
								router.push(`${window.location.pathname}?${createQueryString('page', page + 1)}`)
							}}>
							<img className=' w-[30px] h-[30px] rounded-full' src="/assets/icons/next.svg" alt="next" />
						</button>

					</div>
					{/* end of pagination */}
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