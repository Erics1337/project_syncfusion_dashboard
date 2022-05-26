import React from 'react'

import { useStateContext } from '../contexts/ContextProvider'

type Props = {
	icon?: any
	bgHoverColor?: string
	bgColor?: string
	color?: string
	size?: string
	width?: any
	text?: string
	borderRadius?: string
}

const Button = ({
	icon,
	bgColor,
	color,
	bgHoverColor,
	size,
	text,
	borderRadius,
	width,
}: Props) => {
	const { setIsClicked, initialState } = useStateContext()

	return (
		<button
			type='button'
			onClick={() => setIsClicked(initialState)}
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}>
			{icon} {text}
		</button>
	)
}

export default Button
