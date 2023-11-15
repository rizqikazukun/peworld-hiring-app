import React from 'react'

export default function InputText({id, labelName, placeholder, onChange}) {
  return (
	<div className='flex flex-col gap-2' 
	onChange={onChange}>
		<label htmlFor={id}>{labelName}</label>
		<input id={id} type="text" placeholder={placeholder}
		className='focus:outline-none border-pw-gray20 border-2 rounded-md w-full p-2 h-10' />
	</div>
  )
}
