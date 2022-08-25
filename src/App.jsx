import React from "react";
import Header from "./Components/Header.jsx/Header.jsx";
import {Route, Routes} from 'react-router-dom'

const App = () =>{

    return(
        <div>
            <Routes>
                <Route path="/" element={<Header/>}>
                   <Route path="/" element={<Header/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App