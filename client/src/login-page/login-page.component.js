import React, {Component} from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
//import { Checkbox } from 'primereact/checkbox';
import { useNavigate } from 'react-router-dom';

const LoginPageComponent= () =>{

const navigate = useNavigate();

    return (
    <div className="flex justify-content-center border-none">
    <div className="surface-card shadow-2 p-2 border-none w-full lg:w-8 " styleClass="loginUiGrid">
        <div className="text-center mb-5 ">
             <div className="text-900 text-3xl font-medium mb-3">Please sign in</div>
            {/* <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a> */}
        </div>

        <div>
            <label htmlFor="username" className="block text-900 font-medium ">User name</label>
            <InputText id="username" type="text" placeholder="Email address" className="w-full mb-3 " />

            <label htmlFor="password" className="block text-900 font-medium ">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3 " />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    {/* <Checkbox id="rememberme" onChange={e => setChecked(e.checked)} checked={checked} className="mr-2" />
                    <label htmlFor="rememberme">Remember me</label> */}
                </div>
                <a href="../Assets/images/fikir-logo-2-1.png" className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            <Button label="Sign In" onClick={() => navigate('/dashboard')} icon="pi pi-user" className="w-full mb-2" />
        </div>
    </div>
</div>
    )
}
export default LoginPageComponent;