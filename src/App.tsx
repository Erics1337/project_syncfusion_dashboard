import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import {
	Ecommerce,
	Orders,
	Calendar,
	Employees,
	Stacked,
	Pyramid,
	Customers,
	Kanban,
	Line,
	Area,
	Bar,
	Pie,
	Financial,
	ColorPicker,
	ColorMapping,
	Editor,
} from './pages'

import './App.css'

import { useStateContext } from './contexts/ContextProvider'
import { Theme } from '@syncfusion/ej2-react-charts'

const App = () => {
	const {
		setCurrentColor,
		setCurrentMode,
		currentMode,
		activeMenu,
		currentColor,
		themeSettings,
		setThemeSettings,
	} = useStateContext()

	useEffect(() => {
		const currentThemeColor = localStorage.getItem('colorMode')
		const currentThemeMode = localStorage.getItem('themeMode')
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor)
			setCurrentMode(currentThemeMode)
		}
	}, [])

	return (
		<div className={currentMode === 'Dark' ? 'dark' : ''}>
			<BrowserRouter>
				<div className='flex relative dark:bg-main-dark-bg'>
					<div
						className='fixed right-4 bottom-4'
						style={{ zIndex: '1000' }}>
						<TooltipComponent content='Settings'>
							<button
								onClick={() => setThemeSettings(true)}
								type='button'
								className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white rounded-full'
								style={{ background: currentColor }}>
								<FiSettings />
							</button>
						</TooltipComponent>
					</div>
					{activeMenu ? (
						<div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
							<Sidebar />
						</div>
					) : (
						<div className='w-0 dark:bg-secondary-dark-bg'>
							<Sidebar />
						</div>
					)}
					<div
						className={
							activeMenu
								? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
								: 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
						}>
						<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
							<Navbar />
						</div>
						<div>
							<Routes>
								{/* Dashboard */}
								<Route path='/' element={<Ecommerce />} />
								<Route
									path='/ecommerce'
									element={<Ecommerce />}
								/>
								{/* Pages */}
								<Route path='/orders' element={<Orders />} />
								<Route
									path='/employees'
									element={<Employees />}
								/>
								<Route
									path='/customers'
									element={<Customers />}
								/>
								{/* Apps */}
								<Route path='/kanban' element={<Kanban />} />
								<Route path='/editor' element={<Editor />} />
								<Route
									path='/calendar'
									element={<Calendar />}
								/>
								<Route
									path='/color-picker'
									element={<ColorPicker />}
								/>
								{/* Charts */}
								<Route path='/line' element={<Line />} />
								<Route path='/area' element={<Area />} />
								<Route path='/bar' element={<Bar />} />
								<Route path='/pie' element={<Pie />} />
								<Route
									path='/financial'
									element={<Financial />}
								/>
								<Route
									path='/color-mapping'
									element={<ColorMapping />}
								/>
								<Route path='/pyramid' element={<Pyramid />} />
								<Route path='/stacked' element={<Stacked />} />
							</Routes>
						</div>
						{themeSettings && <ThemeSettings />}
					</div>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default App
