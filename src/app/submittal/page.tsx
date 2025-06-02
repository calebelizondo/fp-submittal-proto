import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import "./styles.css"


const Submittal = () => {
  return (
    <div>
        <Navbar>
            <a href="/jobsite" className="flex flex-row h-full p-2">
                <img src="/back.svg" alt="Back" />
            </a>
            <div className="h-full flex items-center">
                <h1 className='text-black m-2'>
                    <b>
                        SUBMITAL ID X
                    </b>
                </h1>
            </div>
        </Navbar>
        <a href="/jobsite" className="p-1 justify-between flex flex-row border-2 rounded-md bg-black fixed right-2 bottom-2">
            <img className="h-10 filter invert" src="/add.svg" alt="Add" />
            <h1 className='text-white m-2'>SAVE</h1>
        </a>

        <div className='w-full h-[100vh] grid grid grid-cols-2'>
        <div className='p-4'>
            <div>
                <div className="p-2">
                    <label className="block text-gray-800 font-semibold text-sm">
                    Description
                    </label>
                    <div className="mt-2">
                        <textarea
                            rows={6}
                            className="block w-full rounded-md py-3 px-4 text-lg ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white resize-y"
                            placeholder="Type your description here..."
                            >
                            
                        </textarea>
                    </div>
                </div>
                <div className="p-2 w-full flex flex-row justify-left">
                    <div className='mr-2'>
                        <label className="block text-gray-800 font-semibold text-sm">
                            Tags
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-gray-800 font-semibold text-sm">
                            Due Date
                        </label>
                        <div className="mt-2">
                            <input
                            type="date"
                            name="inputname"
                            className="block w-full rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white"
                            />
                        </div> 
                    </div>
                </div>
                <div className="p-2">
                    <button>
                        <svg
                            aria-hidden="true"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            strokeWidth="2"
                            stroke="#fffffff"
                            d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            ></path>
                            <path
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            stroke="#fffffff"
                            d="M17 15V18M17 21V18M17 18H14M17 18H20"
                            ></path>
                        </svg>
                            ADD FILE
                    </button>
                </div>

                
                {/* <div className="p-2">
                    <label className="block text-gray-800 font-semibold text-sm">
                    Description
                    </label>
                    <div className="mt-2">
                        <input
                        type="text"
                        name="inputname"
                        className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white"
                        />
                    </div>
                    <label className="pt-1 block text-gray-500 text-sm">Some Description</label>
                
                </div> */}
            </div>
        </div>
        <iframe className='w-full h-full' src="/blank.pdf#toolbar=0&navpanes=0&scrollbar=0" />
    </div>
    </div>
  )
}

export default Submittal