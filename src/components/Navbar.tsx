import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Cart, Chat, Notification, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

type Props = {
	title: string
	customFunc: () => void
	icon: any
	color: string
	dotColor: string
}

const NavButton = ({ title, customFunc, icon, color, dotColor }: Props) => (
	<TooltipComponent content={title} position='BottomCenter'>
		<button
			type='button'
			onClick={customFunc}
			style={{ color }}
			className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
			<span
				className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
				style={{ background: dotColor }}
			/>
			{icon}
		</button>
	</TooltipComponent>
)

const Navbar = () => {
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext()

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth)

		window.addEventListener('resize', handleResize)
		handleResize()

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	useEffect(() => {
		if (screenSize <= 900) setActiveMenu(false)
		else setActiveMenu(true)
	}, [])

	return (
		<div className='flex justify-between p-2 md:mx-6 relative'>
			<NavButton
				title='Menu'
				customFunc={() =>
					setActiveMenu((prevActiveMenu: boolean) => !prevActiveMenu)
				}
				color='blue'
				dotColor='blue'
				icon={<AiOutlineMenu />}
			/>
			<div className='flex'>
				<NavButton
					title='Menu'
					customFunc={() => handleClick('cart' as string)}
					color='blue'
					dotColor='blue'
					icon={<FiShoppingCart />}
				/>
				<NavButton
					title='Menu'
					customFunc={() => handleClick('chat' as string)}
					color='blue'
					dotColor='#03c9D7'
					icon={<BsChatLeft />}
				/>
				<NavButton
					title='Menu'
					customFunc={() => handleClick('notification' as string)}
					color='blue'
					dotColor='#03c9D7'
					icon={<RiNotification3Line />}
				/>
				<TooltipComponent content='Profile' position='BottomCenter'>
					<div
						onClick={() => handleClick('userProfile' as string)}
						className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'>
						<img
							className='rounded-full w-8 h-8'
							src={'../data/avatar.jpg'}
							alt=''
						/>
						<p>
							<span className='text-gray-400 text-14'>Hi, </span>{' '}
							<span className='texy-gray-400 font-bold ml-1 text-14'>
								Michael
							</span>
						</p>
						<MdKeyboardArrowDown className='text-gray-400 text-14' />
					</div>
				</TooltipComponent>
				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	)
}

export default Navbar
