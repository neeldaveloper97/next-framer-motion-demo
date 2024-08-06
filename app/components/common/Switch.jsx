// import { useTheme } from '@/app/contexts/themeContext';
import {motion} from 'framer-motion'
import React, {useEffect, useState} from 'react'
import {RiMoonClearFill, RiSunFill} from 'react-icons/ri'
import { useTheme } from '../../contexts/themeContext';

export default function DarkModeSwitch(){

  const {theme, toggleTheme} = useTheme()
  // const [theme, toggleTheme] = useState('dark')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.querySelector("body").classList.add('dark');
    } else {
      document.documentElement.querySelector("body").classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleSwitch = () => {
    toggleTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark')
  };

    const spring = {
        type: 'spring',
        stiffness: 700,
        damping: 30,
    }

    return(
        <div onClick={toggleSwitch} className={`z-[100] fixed bottom-4 right-0 transform -translate-x-1 md:top-4 md:right-4 md:bottom-auto md:left-auto md:translate-x-0 flex flex-start h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${ theme === 'dark' ? 'place-content-end' : ''}`}>

            <motion.div
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
                layout
                transition={spring}
            >
                <motion.div whileTap={{rotate: 360}}>
                    {theme === 'dark' ? (<RiSunFill className="h-6 w-6 text-yellow-300" />) : (<RiMoonClearFill className="h-6 w-6 text-slate-200" />)}
                </motion.div>

            </motion.div>      

        </div>
    )
}