/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import InputEmail from '@/components/input/InputEmail'
import InputPassword from '@/components/input/InputPassword'
import axios from 'axios'
const poppins = Poppins({ subsets: ['latin'], weight: '400' })
import { hasCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/router'
import AuthButton from '@/components/button/AuthButton'


export default function Login(props) {

	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [loading, setLoading] = React.useState(false)

	const [inputErr, setInputErr] = React.useState(undefined)
	const [authErr, setAuthErr] = React.useState(undefined)

	const router = useRouter()

	const handleLogin = async () => {
		try {
			setLoading(true)
			const result = await axios({
				method: 'post',
				url: `${props.BE_URL}/auth/login`,
				data: {
					email,
					password
				}
			})

			setCookie('user', JSON.stringify(result.data.data.user))
			setCookie('token', 'Bearer ' + result.data.data.token)

		} catch (error) {

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

		if (hasCookie('user') &&
			hasCookie('token')) {
			router.push('/')
		}

		if (authErr !== undefined || inputErr !== undefined) {
			console.log(authErr)
			console.log(inputErr)
			setTimeout(() => {
				setAuthErr(undefined)
				setInputErr(undefined)
			}, 2000)
		}
	}, [inputErr, authErr, loading, router]
	)


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
						<p className=' items-center align-center text-[3vw] font-semibold text-white leading-normal'>
							Temukan talent berbakat & terbaik di berbagai bidang keahlian
						</p>
					</div>

					<div>
						{/* it just div dummy for justify content between */}
					</div>

				</div>


				<div id='right-content' className='max-lg:w-screen flex flex-col w-[50vw] max-sm:p-2 p-14 gap-8 justify-center'>


					{/* login title */}
					<div className='flex flex-col gap-5 mt-5 text-center'>
							<p className='text-4xl font-semibold text-pw-purple max-sm:leading-[3.8rem]'>
								Login as <span className='py-1 px-2 bg-pw-purple text-white rounded-lg'>Recruiter</span>
							</p>
							<p>
								Temukan talent berbakat & terbaik di berbagai bidang keahlian
							</p>
						</div>

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

					{/* Login Form */}

					<InputEmail onChange={(e) => {
						setEmail(e.target.value)
					}} />

					<InputPassword onChange={(e) => {
						setPassword(e.target.value)
					}} />

					<p className=' text-right'>Lupa kata sandi?</p>

					<AuthButton type='login' loadingIndicator={loading} onClick={handleLogin} />


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