import React, {Component,ReactDOM} from 'react';
import "primereact/resources/primereact.min.css";                
import { Button } from 'primereact/button';
import './landing-page.componen.css';

import LoginPageComponent from '../../login-page/login-page.component';
class LandingPageComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
     
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {    
        return(
        <div id="wrapper">
           <div className="grid grid-nogutter surface-0 text-800 h-screen">
           <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
        
               <section>
               <LoginPageComponent/>
                   
                </section>
            </div>
        
           <div className="col-12 md:col-6 overflow-hidden">
                <img src={require("./../../Assets/images/fikir-waters.PNG")} alt="landing" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
            </div>
        </div>
       </div>
        )
           }
           else {  
            return(
            <div id="wrapper">
            <div className="grid grid-nogutter surface-0 text-800 h-screen">
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
         
                <section>
                <span className="block text-6xl font-bold mb-1">FikirERP-Proof of Concept</span>
                   <div className="text-6xl text-primary font-bold mb-3">Center of Management</div>
                     <p className="mt-0 mb-4 text-700 line-height-3">FikirERP integrates the whole company operations seamlessly in one place.</p>
                    <Button label="Log in" onClick={this.handleLoginClick} type="button" className="mr-3 p-button-raised"/>
                   
                 </section>
             </div>
         
            <div className="col-12 md:col-6 overflow-hidden">
                 <img src={require("./../../Assets/images/fikir-waters.PNG")} alt="landing" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
             </div>
         </div>
        </div>  
            )  
        }
    
    }
  }
  export default LandingPageComponent;
//   const root = ReactDOM.createRoot(document.getElementById('root')); 
//   root.render(<LandingPageComponent />);

// const LandingPageComponent =()=>{

// const navigate = useNavigate();
// let loginClicked = false;    

// const handleLogin=()=>{
//     loginClicked = true;
// }

// return (
//     <div id="wrapper">
//     <div className="grid grid-nogutter surface-0 text-800 h-screen">
//     <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">

//         <section>
//             <span className="block text-6xl font-bold mb-1">FikirERP-Proof of Concept</span>
//             <div className="text-6xl text-primary font-bold mb-3">Center of Management</div>
//             <p className="mt-0 mb-4 text-700 line-height-3">FikirERP integrates the whole company operations seamlessly in one place.</p>

//             <Button label="Log in" type="button" className="mr-3 p-button-raised"/>
            
//         </section>
//     </div>

//     <div className="col-12 md:col-6 overflow-hidden">
//         <img src={require("./../../Assets/images/fikir-waters.PNG")} alt="landing" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
//     </div>
// </div>
// </div>

//     );
//     }
//export default LandingPageComponent;
    