import React from 'react';
import LeftSideBar from "./LeftSideBar";

const ECommerceDashBoard = ()=>{
  const toggler = React.useRef(null);
  const nav = React.useRef(null);

const handleClick = () =>{
    if(nav.current.classList.contains('flex')){
        nav.current.classList.remove('flex');
        nav.current.classList.add('hidden');

    }else{
        nav.current.classList.remove('hidden');
        nav.current.classList.add('flex');
    }

}

  return (
    <div className='flex flex-col '>
        <div className='flex  self-start lg:hidden' onClick={()=>handleClick()} ref={toggler} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
            </svg>
        </div>
        <div  className='grid  grid-flow-col grid-rows-1 md:grid-cols-12 '  >
            <aside  ref={nav}  className='hidden lg:flex   lg:col-span-2 bg-gray-50  justify-self-center' >
                <LeftSideBar/>
            </aside>
            <main className=' md:col-span-7 bg-gray-100' > main content here  xxxx hekandjasndjasndjkn </main>
            <aside className='hidden lg:flex lg:col-span-3 bg-blue-500' > left drawerbar here </aside>
        </div>
    </div>

  );
};

export default ECommerceDashBoard;
