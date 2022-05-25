import React from 'react'

type Props = {
	bgColor: string
	color: string
	size: string
	text: string
	borderRadius: string
}

const Button = ({ bgColor, color, size, text, borderRadius }: Props) => {
	return (
		<button
			type='button'
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-[${size}] p-3 hover:drop-shadow-xl`}>
			{text}
		</button>
	)
}

export default Button
