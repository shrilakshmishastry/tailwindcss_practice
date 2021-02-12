import React from 'react';

const Brand = () =>{
    return(
        <div className='bg-white shadow px-5 py-2 rounded-md font-medium  font-custom flex flex-row '>
            <div className='pr-3'>
                <svg className="w-6 h-6" fill="blue" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                </svg>
            </div>
            Commercehq
        </div>
    );
};
export default Brand;
