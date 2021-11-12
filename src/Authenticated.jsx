import React from 'react'
import {Routes, Route, NavLink, Navigate} from 'react-router-dom'

import Products from './Pages/Products/Products'
import ProductSingle from './Pages/ProductSingle/ProductSingle'
import Settings from './Pages/Settings/Settings'
import Welcome from './Pages/Welcome/Welcome'




function AuthenticatedApp(){

    return <>

    <nav>
        <ul>
            <li>
                <NavLink to='/'>Home</NavLink>
                
            </li>
            <li>
                <NavLink to='/products'>Products</NavLink>    
            </li>
             <li>
                <NavLink to='/settings'>Settings</NavLink>    
            </li>
        </ul>
    </nav>
    
        <Routes>
            <Route path='/' element={<Navigate to='/welcome'/>}/>
            <Route path='/welcome' element={<Welcome/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<ProductSingle/>}/>
            <Route path='/settings/*' element={<Settings/>}/>

        </Routes>
    </>
}


export default AuthenticatedApp;