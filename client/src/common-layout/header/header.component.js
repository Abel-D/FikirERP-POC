import React, { Component } from "react";
import {Button} from 'primereact/button';
import {Link} from 'react-router-dom';

const HeaderComponent = ()=>{


    return (
        
      <div className="surface-0">
    <ul className="list-none p-0 m-0 flex align-items-center font-medium mb-3">
        <li>
            <a className="text-500 no-underline line-height-3 cursor-pointer"></a>
        </li>
        <li className="px-2">
            <i className="pi pi-angle-right text-500 line-height-3"></i>
        </li>
        <li>
            <span className="text-900 line-height-3"></span>
        </li>
    </ul>
    <div className="flex align-items-start flex-column lg:justify-content-between lg:flex-row">
        
         <div>
            <div className="font-medium text-3xl text-900"></div>
            <div className="flex align-items-center text-700 flex-wrap">
               
            </div>
        </div> 
      
     </div>
 </div> 
    );
}

export default HeaderComponent;