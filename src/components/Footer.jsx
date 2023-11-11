/* eslint-disable @next/next/no-img-element */
import React from 'react'


export default function Footer() {
	return (
		<div id='Footer' className=' bg-pw-purple'>
			<div className='container px-8 py-4 mx-auto max-sm:px-10'>
				<div className='my-2 flex max-sm:justify-center'>
					<img src="/logo.svg" className='h-[50px]' alt="logo" />
				</div>
				<div className='my-4'>
					<p className='text-white max-sm:text-center'>
						Peworld, hiring application. <br />
						Recruiter and Job Seeker.
					</p>
				</div>
				<hr className=' border-[1px]' />
				<div className='flex max-sm:justify-center justify-between flex-wrap py-5'>

					<div>
						<p className='text-white max-sm:my-2 max-sm:text-center'>
							2020 Pewworld. All right reserved
						</p>
					</div>

					<div className='flex gap-10 max-sm:my-3'>
						<p className='text-white'>Telpon</p>
						<p className='text-white'>Email</p>
					</div>
					
				</div>

			</div>
		</div>
	)
}
