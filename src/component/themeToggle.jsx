import React from 'react'
import { useState, useEffect } from 'react'
import { Sun , Moon} from 'lucide-react'
import { memo } from 'react';


const ThemeToggle = () => {
    const [darkmode, setDarkmode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');    
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
            setDarkmode(true)
        }else{
            document.documentElement.classList.remove('dark')
            setDarkmode(false)
        }}, []);

    const toggleDarkmode = () =>{
        if(darkmode){
             document.documentElement.classList.remove('darkmode')
            setDarkmode(false)
            localStorage.setItem('theme', 'light')
          
        }else{
            document.documentElement.classList.add('darkmode')
            setDarkmode(true)
            localStorage.setItem('theme', 'dark')
        }
    }

  return (
    <div onClick={toggleDarkmode} className='toogle-button' >
        <button>{darkmode ? <Sun className='h-5 w-5 border-hidden'/> : <Moon className='h-5 w-5 rounded-lg'/>}</button>
      
    </div>
  )
}
export default memo(ThemeToggle);
