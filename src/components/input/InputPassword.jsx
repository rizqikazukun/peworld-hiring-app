import React from 'react'

export default function InputPassword({id, labelName, placeholder, onChange}) {
  return (
	<div className='flex flex-col gap-2' 
	onChange={onChange}>
		<label htmlFor={id ?? 'password'}>{labelName ?? 'Password'}</label>
		<input id={id ?? 'password'} type="password" placeholder={placeholder ?? 'Insert Password'}
		className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2 h-10' />
	</div>
  )
}
