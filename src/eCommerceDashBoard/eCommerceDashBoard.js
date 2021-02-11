import React from 'react';

const ECommerceDashBoard = ()=>{
  const toggler = React.useRef(null);
  const nav = React.useRef(null);

const handleClick = () =>{
    console.log(toggler.current.classList)

}

  return (
    <div className='flex flex-col '>
        <div className='visible self-start lg:hidden' onClick={()=>handleClick()} ref={toggler} >Icon here</div>
        <div  className='grid grid-flow-col grid-rows-1 md:grid-cols-12  bg-blue-400'  >

            <aside  ref={nav}  className='invisible lg:visible  lg:col-span-2 bg-blue-200 ' > drawer bar here  </aside>
            <main className=' md:col-span-7 bg-gray-100' > main content here  xxxx hekandjasndjasndjkn </main>
            <aside className='invisible lg:visible lg:col-span-3 bg-blue-500' > left drawerbar here </aside>
        </div>
    </div>

  );
};

export default ECommerceDashBoard;
