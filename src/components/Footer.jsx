/* eslint-disable @next/next/no-img-element */
import React from 'react'


export default function Footer() {
	return (
		<div id='Footer' className=' bg-pw-purple'>
			<div className='container m-auto px-8 pb-3 pt-10 max-sm:px-10'>
				<div className='my-2 flex max-sm:justify-center'>
					<img src="/peworld-white-wo-bg.svg" className='h-[50px]' alt="logo" />
				</div>
				<div className='my-4'>
					<p className='text-white max-sm:text-center'>
						Peworld, hiring application. <br />
						For Recruiter and Job Seeker.
					</p>
				</div>
				<hr className=' border-[1px]' />
				<div className='flex max-sm:justify-center justify-between flex-wrap py-5'>

					<div>
						<p className='text-white max-sm:my-2 max-sm:text-center'>
							2023 Peworld. All right reserved
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
