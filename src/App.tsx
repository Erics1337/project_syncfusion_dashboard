import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import './App.css'

import { useStateContext } from './contexts/ContextProvider'

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

	return <div className={currentMode === 'Dark' ? 'dark' : ''}></div>
}

export default App
