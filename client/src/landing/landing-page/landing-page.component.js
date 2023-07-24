import React, {Component} from 'react';
import "primereact/resources/primereact.min.css";                
import { Button } from 'primereact/button';
import './landing-page.componen.css';
import { useNavigate } from 'react-router-dom';

export default class LandingPageComponent extends Component{

render(){
return (
    <div id="wrapper">
    <div className="grid grid-nogutter surface-0 text-800 h-screen">
    <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        <section>
            <span className="block text-6xl font-bold mb-1">FikirERP-Proof of Concept</span>
            <div className="text-6xl text-primary font-bold mb-3">Center of Management</div>
            <p className="mt-0 mb-4 text-700 line-height-3">FikirERP integrates the whole company operations seamlessly in one place.</p>

            <Button label="Log in" type="button" className="mr-3 p-button-raised"/>
            
        </section>
    </div>
    <div className="col-12 md:col-6 overflow-hidden">
        <img src={require("./../../Assets/images/fikir-waters.PNG")} alt="landing" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
    </div>
</div>
</div>

    );
    }
}
    