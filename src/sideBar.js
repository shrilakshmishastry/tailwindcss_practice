import React from 'react';

const SideBar = ()=>{
    const navItem = React.useRef(null);
    const barMenu = React.useRef(null);
    const handleClick = ()=>{
        if(navItem.current.classList.contains('hidden')){
            navItem.current.classList.remove('hidden');
            navItem.current.classList.add('flex');
        }
        else{
            navItem.current.classList.remove('flex');
            navItem.current.classList.add('hidden');
        }
    }

    return(
        <div className="flex h-screen px-8 py-2 bg-gray-300 flex-col" >
            <div className="mx-5 my-10 lg:hidden" ref={barMenu} onClick={()=>handleClick()}>
                <svg className="w-6 h-6 lg:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </div>
            <aside ref={navItem} className="h-screen   hidden lg:flex flex-col pb-4 justify-between bg-white w-64 rounded-lg shadow-lg">
                <nav>
                    <ul className="px-2 py-3 mb-8" >
                        <Row icon="home"  >Dashboard</Row>
                        <Row icon="team"  >Team</Row>
                        <Row icon="calender"  >Calender</Row>
                        <Row icon="docs"  >Document</Row>
                        <Row icon="reports"  >Report</Row>
                    </ul>
                    <span className="flex px-4 pb-2 uppercase block text-gray-400 tracking-wider">Project</span>
                    <ul className="px-4">
                        <Project>Website Redesign</Project>
                        <Project>GraphQL API</Project>
                        <Project>Customer migration guides</Project>
                        <Project>Profit sharing problem</Project>
                    </ul>
                </nav>
                <div className="flex text-center justify-between px-2 mt-8 md:mt-0">
                    <div className="flex ">
                        <img className="w-8 h-8 rounded-3xl" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=120&q=80" alt=""/>
                        <div className="flex items-start pl-2 flex-col">
                            <span className="font-medium">Dianne Robertson</span>
                            <span className="text-sm focus:text-indigo-500 hover:text-indigo-500 text-gray-500">View Profile</span>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="text-gray-400   p-1 focus:bg-gray-100 hover:bg-gray-100 p-2  hover:border-2" >
                            <span className="transform group  group-hover:rotate-45 transition-transform duration-300 ease-in">{icons.geart}</span>
                        </button>
                    </div>

                </div>
            </aside>
            <main></main>
        </div>
    );
}

const Project = (props)=>{
    return <a href="/" className="flex  block py-2 text-gray-700 focus:text-indigo-500 hover:text-indigo-500 ">{props.children}</a>   ;
}

const Row = (props) =>{
    return(
        <li>
            <a href="/" className="flex items-center space-x-2 py-4 rounded  hover:bg-gray-100 ease-in-out transition-colors duration-200 focus:bg-gray-100  pl-2 ">
                <span className="text-gray-400 ">{icons[props.icon]}</span>
                <span className="text-gray-900">{props.children}</span>
            </a>
        </li>
    );
}

const icons = {
    home: (
        <svg className="w-6 h-6 text-xs " fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
    ),
    calender: (
        <svg className="w-6 h-6 text-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
    ),
    team : (
        <svg className="w-6 h-6 text-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
    ),
    docs : (
        <svg className="w-6 h-6 text-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
        </svg>
    ),
    reports: (
        <svg className="w-6 h-6 text-xs" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
    ),
    geart:(
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>
    )
};

export default SideBar;
