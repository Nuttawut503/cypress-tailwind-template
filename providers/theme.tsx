import React, { createContext, useEffect, useState } from 'react';

interface ThemeState {
  isDarkMode: boolean
  toggle: () => void
  changeToDarkMode: () => void
  changeToLightMode: () => void
}

export const ThemeContext = createContext<ThemeState>({
  isDarkMode: false,
  toggle: () => {},
  changeToDarkMode: () => {},
  changeToLightMode: () => {},
})

export const ThemeProvider: React.FC<{children?: React.ReactNode}> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const toggle = () => setIsDarkMode(!isDarkMode)
  const changeToDarkMode = () => {
    setIsDarkMode(true)
    window.localStorage.setItem('theme', 'dark')
  }
  const changeToLightMode = () => {
    setIsDarkMode(false)
    window.localStorage.setItem('theme', 'light')
  }
  useEffect(() => {
    if (window.localStorage.getItem('theme') === 'dark' || !window.localStorage.getItem('theme')) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <ThemeContext.Provider value={{isDarkMode, toggle, changeToDarkMode, changeToLightMode}}>
      {children}
    </ThemeContext.Provider>
  )
}
