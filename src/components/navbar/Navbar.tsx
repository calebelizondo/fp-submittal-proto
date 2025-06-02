import React from 'react';


interface NavbarProps {
    children?: React.ReactNode;
}

const Navbar: React.FC<NavbarProps> = ({children}) => {
  return (
    <>
        <div className="pt-[10vh]" /> 
        <div className='shadow p-2 fixed flex flex-row justify-between top-0 left-0 z-50 w-full h-[10vh] border-b-1 bg-white'>
            {children}
        </div>
    </>
  )
};

export default Navbar;