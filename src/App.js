import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import  {EditUser } from './components/EditUser';
import { AddUser } from './components/AddUser';

function App() {

    return (
        <div className='App-header '>
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route element={<Home/>} path="/"></Route>
                        <Route path="/add" component={AddUser} />
                        <Route path="/edit/:id" component={EditUser} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
