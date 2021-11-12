import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'

function Settings(){

    return <>
    
        <h1>Settings</h1>


    <ul>
        <li>
            <Link to='notifications'>Notifications</Link>
        </li>
        <li>
            <Link to='security'>Security</Link>
        </li>
    </ul>


    <Routes>
        <Route path='notifications' element={<p>Notifications</p>}/>
        <Route path='security' element={<p>Security</p>}/>

    </Routes>

</>
}

export default Settings