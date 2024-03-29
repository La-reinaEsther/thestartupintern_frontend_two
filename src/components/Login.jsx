import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Navbar from './Navbar'


function Login() {

    return (
        <React.Fragment>
            <Navbar />
            
            <div className="bg-white-50 flex flex-col mx-auto ">
                <div className="max-w-md w-80 mx-auto">
                    <div className="text-2xl font-normal normal medium 40px/60px Poppins; mb-3 mt-10 ">Welcome back,</div>
                    <p className=" my-3 text-xs m-auto" style={{ width: '20rem' }}>
                        Hi, my name is Eventful Moments, I am a bucket… no, not the bucket of water but I store awesome moments you will like to have in coming years.
                    </p>
                </div>
                
    
               <form>
                    <div className="form-group ">
                    <label htmlFor="" className="text-sm font-bold text-gray-600">Email</label>
                        <input type="email" className="w-68 p-2 border border-gray-300 block mx-auto rounded mt-1" required/> 
                    </div>
            
                    <div className="form-group">
                        <label htmlFor="" className="text-sm font-bold text-gray-600">Password</label>
                        <input type="password" className="w-68 p-2 border border-gray-300 block mx-auto rounded mt-1" required/>
                    </div>

                    <div className="form-group">
                        {/* <button type="submit" className="btn btn-submit">Login</button> */}
                        <Link to="/bucket" className="btn btn-submit">Login</Link>
                    </div>
               </form>
            </div>
            <Footer className= "fixed" />
        </React.Fragment>
    )
}

export default Login
