import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'
import { IoMdHeartEmpty } from 'react-icons/io'

const Sidebar = () => {
	const { activeMenu, setActiveMenu, screenSize, currentColor } =
		useStateContext()

	const activeLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
	const normalLink =
		'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md text-gray-700'

	const handleCloseSidebar = () => {
		if (activeMenu && screenSize <= 900) setActiveMenu(false)
	}

	return (
		<div className='z-10 bg-white ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 dark:bg-secondary-dark-bg'>
			{activeMenu && (
				<>
					<div className='flex justify-between items-center'>
						<Link
							to='/'
							className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'
							onClick={() => handleCloseSidebar}>
							<SiShopware className='text-3xl' />
							<span>Shoppy</span>
						</Link>
						<TooltipComponent
							content='Menu'
							position='BottomCenter'>
							<button
								type='button'
								onClick={() =>
									// get previous state with callback function as first argument of setState
									setActiveMenu(
										(prevActiveMenu: boolean) =>
											!prevActiveMenu
									)
								}
								className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
								<MdOutlineCancel />
							</button>
						</TooltipComponent>
					</div>
					<div className='mt-10'>
						{links.map((item) => (
							<div key={item.title}>
								<p className='text-gray-400 m-3 mt-4 uppercase'>
									{item.title}
								</p>
								{item.links.map((link) => (
									<NavLink
										to={`/${link.name}`}
										key={link.name}
										onClick={() =>
											setActiveMenu(
												(prevActiveMenu: boolean) =>
													!prevActiveMenu
											)
										}
										style={({ isActive }) => ({
											backgroundColor: isActive
												? currentColor
												: '',
										})}
										className={({ isActive }) =>
											isActive ? activeLink : normalLink
										}>
										{link.icon}
										<span className='capitalize'>
											{link.name}
										</span>
									</NavLink>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default Sidebar
