import React, { Component }  from 'react';
import './App.css';
import { BrowserRouter,Routes, Route,Link, useNavigate} from 'react-router-dom';
import LandingPageComponent from './landing/landing-page/landing-page.component';
import LandingDashboardComponent from './landing/landing-dashboard/landing-dashboard.component';
import LoginPageComponent from './login-page/login-page.component';
import AddProductComponent from './features/product/components/create-product/add-product.component';
import ProductListComponent  from './features/product/components/product-list/product-list.component';
import HeaderComponent from './common-layout/header/header.component';
// import "bootstrap/dist/css/bootstrap.min.css";


class App extends Component{
  

render(){
    return (
       <div>
        <HeaderComponent/> 
    <>
     <Routes>
        <Route path="/" element={<LandingPageComponent />} />
        <Route path="/login" element={<LoginPageComponent />} />
        <Route path="/dashboard" element={<LandingDashboardComponent />} />
        <Route path="/production/products/add" element={<AddProductComponent/>} />
        <Route path="/production/products/list" element={<ProductListComponent/>} />
    </Routes>
    </> 
    </div>
    )
}

}

export default App;