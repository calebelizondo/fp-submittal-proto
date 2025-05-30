import React from 'react';


interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
  return (
    <>
        <div className="pt-[10vh]" /> 
        <div className='p-2 fixed flex flex-row justify-between top-0 left-0 z-50 w-screen h-[10vh] border-b-2 bg-white'>
            {children}
            {/* <div className="h-full flex items-center">
                <h1 className='text-black'><b>APP NAME</b></h1>
            </div>
            <img src="/placeholder_logo.svg" alt="App logo" />
            <img src="/user.svg" alt="User options" /> */}
        </div>
    </>
  )
};

export default Navbar;