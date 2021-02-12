import React from "react";
import Brand from "./brand";
import IconTextNav from "./iconTextNav";
import Btn from "./btn";

const LeftSideBar = () =>{
    return(
        <div  className='w-full px-5  py-5 flex-col  h-screen'  >
            <Brand />
            <IconTextNav/>
            <Btn/>
        </div>
    );
}
export default LeftSideBar;
