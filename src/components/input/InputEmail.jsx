import React from 'react'

export default function InputEmail({id, labelName, placeholder, onChange}) {
  return (
	<div className='flex flex-col gap-2' 
	onChange={onChange}>
		<label htmlFor={id ?? 'email'}>{labelName ?? 'Email'}</label>
		<input id={id ?? 'email'} type="email" placeholder={placeholder ? placeholder : `Insert ${labelName ?? "Email"}`}
		className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2 h-10' />
	</div>
  )
}
