import Navbar from '@/components/navbar/Navbar'
import { Searchbar } from '@/components/Searchbar'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <Navbar>
            <div className="h-full flex items-center">
                <h1 className='text-black'><b>APP NAME</b></h1>
            </div>
            <img src="/placeholder_logo.svg" alt="App logo" />
            <img src="/user.svg" alt="User options" />
        </Navbar>
        <div className='p-2'>
            {/* <div className="m-2 flex w-[100vw] flex-row justify-right mb-[10px]">
                <Searchbar/>
            </div> */}
            <div className='grid grid-cols-4 '>
                {Array.from({ length: 50 }).map((_, i) => (
                    <a className="m-2 border-1 rounded-md bg-white mb-[3px] h-[100px] flex items-center p-2 text-center" href={`/jobsite?site=${i}`} key={i}><div key={i}>JOB ID {i + 1}</div></a>
                ))}
            </div>
        </div>
    </div>
  )
}