
import React, { useState } from 'react'


const LightAndDarkModeButton = () => {
    const [mode, setMode] = useState('light');

    const toggleMode = () => {
        if (mode == 'light') {
            setMode('dark');
            document.body.style.backgroundColor = '#111120';
        }
        else {
            setMode('light')
            document.body.style.backgroundColor = 'white'

        }
    }

    return (
        <div>

            <h1 className='text-center my-10 text-xl font-bold ' >This is Dark And Light Mode Button </h1>

            <div className='flex justify-center items-center h-screen'>

                <button
                    onClick={toggleMode}
                    className='bg-gray-300 rounded-full p-2'>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default LightAndDarkModeButton