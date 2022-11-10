import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {useState} from "react";
import './common/common.css';
import Auth from "./Auth/auth";
import Home from "./Home/home";

function ActiveSwitch(){
    const [IsLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={IsLoggedIn ? <Navigate to='/home' /> : <Navigate to='/auth' />}/>
                    <Route path='/auth' element={<Auth IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ActiveSwitch;