/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import InputText from '@/components/input/InputText'
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'
import { hasCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import AuthButton from '@/components/button/AuthButton'
import axios from 'axios'
import Head from 'next/head'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })


export default function Register(props) {

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [passwordC, setPasswordC] = React.useState('')
	const [fullname, setFullname] = React.useState('')
	const [company, setCompany] = React.useState('')
	const [job_title, setJobTitle] = React.useState('')
	const [phone, setPhone] = React.useState('')

	const [timeLeft, setTimeLeft] = React.useState(5)
	const [registered, setRegistered] = React.useState(false)
	const [loading, setLoading] = React.useState(false)
	const [valid, setValid] = React.useState(false)

	const [inputErr, setInputErr] = React.useState(undefined)
	const [authErr, setAuthErr] = React.useState(undefined)

	const router = useRouter()

	const handleRegister = async () => {
		try {
			setLoading(true)

			await axios({
				method: 'post',
				url: `${props.BE_URL}/auth/register`,
				data: {
					email,
					password,
					fullname,
					company,
					job_title,
					phone
				}
			})

			setRegistered(true)

		} catch (error) {

			// console.log(error)

			if (error.response.status === 422) {
				setInputErr(error.response.data.messages)
			} else if (error.response.status === 400) {
				setAuthErr(error.response.data.messages)
			}

		} finally {
			setLoading(false)
		}
	}

	React.useEffect(() => {

		if (registered) {
			setTimeout(() => {
				for (let time = timeLeft; time > 0; time--) {
					setTimeLeft(timeLeft - 1)
				}
				if (timeLeft === 0) {
					router.push('/login')
				}
			}, 1000)
		}

		if (authErr !== undefined || inputErr !== undefined) {
			console.log(authErr)
			console.log(inputErr)
			setTimeout(() => {
				setAuthErr(undefined)
				setInputErr(undefined)
			}, 5000)
		}

		// input validation

		const inputNotEmpty = (
			email !== '' && password !== '' && fullname !== '' &&
			company !== '' && job_title !== '' && phone !== '')

		const passwordMatch = password === passwordC

		if (inputNotEmpty && passwordMatch) {
			setValid(true)
		} else {
			setValid(false)
		}

	}, [authErr, company, email, fullname, inputErr, job_title, password, passwordC, phone, registered, router, timeLeft, valid])


	return (
		<div id='Login' className={poppins.className}>

			<Head>
				<title>
					Recruiter Register | Peworld
				</title>
			</Head>

			<div className='lg:hidden'>
				<Navbar />
			</div>

			<div id='left-content' className='mx-auto flex flex-row p-10 h-screen max-lg:bg-white bg-pw-gray5'>

				<div className='max-lg:hidden flex flex-col justify-between w-[50vw] bg-pw-purple-hover  
						 bg-[url("/assets/images/banner-auth.png")] 
						bg-center bg-cover bg-blend-soft-light p-14 rounded-xl'>

					<Link href='/'>
						<img className=' w-40' src="/peworld-white-wo-bg.svg" alt="logo peworld" />
					</Link>

					<div className='mx-auto p-10 w-5/6'>
						<p className=' items-center align-center text-[3vw] font-semibold text-white leading-normal'>
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
						<div className='flex flex-col gap-5 my-5 text-center'>
							<p className='text-4xl font-semibold text-pw-purple max-sm:leading-[3.8rem]'>
								<span className='py-1 px-2 bg-pw-purple text-white rounded-lg'>Recruiter</span>
								{' '}Register
							</p>
						</div>

						{/* Register Form */}
						<InputText id='name' labelName='Full Name' onChange={e => setFullname(e.target.value)} />
						<InputEmail onChange={e => setEmail(e.target.value)} />
						<InputText id='company' labelName='Company Name' onChange={e => setCompany(e.target.value)} />
						<InputText id='position' labelName='Position' onChange={e => setJobTitle(e.target.value)} />
						<InputText id='phone' labelName='Phone Number' onChange={e => setPhone(e.target.value)} />
						<InputPassword onChange={e => setPassword(e.target.value)} />

						{
							passwordC === '' ? '' :
								password === passwordC ? '' :
									<div className='p-3 rounded-md bg-red-200'>Password Not Match</div>
						}

						<InputPassword id='password-confirm' labelName='Comfirm Password' onChange={e => setPasswordC(e.target.value)} />

						<div className='w-full rounded-md bg-red-200 p-3' hidden={inputErr === undefined && authErr === undefined}>
							{
								authErr ? authErr : ''
							}

							{
								inputErr ? `${inputErr.email?.message}  ` : ''
							}

							{
								inputErr ? inputErr.password?.message : ''
							}
						</div>

						<div className='p-3 rounded-md bg-emerald-200 text-center' hidden={registered ? false : true}>
							Login success, redirect to login in {timeLeft}
						</div>

						<AuthButton type='register' loadingIndicator={loading} disabled={!valid} onClick={handleRegister} />

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

export async function getServerSideProps({ req, res }) {

	if (hasCookie('user', { req, res }) &&
		hasCookie('token', { req, res })) {
		return {
			redirect: {
				permanent: false,
				destination: '/'
			}
		}
	}

	return { props: { BE_URL: process.env.BE_URL } }
}