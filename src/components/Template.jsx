import SideBar from "./SideBar"
import TopBar from "./TopBar"
import React from "react";
function Template (props) {
    return ( 
        <div id="wrapper">
            <SideBar/> 
            <div id="content-wrapper" className="d-flex flex-column">  
                <div id="content">
                    <TopBar/>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Template ;