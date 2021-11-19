import './App.css';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Default from "./Default";
import XML from "./Xml"
import FailedTests from "./FailedTests";
import React from 'react';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Default />} />
                        <Route path=":jobUuid" element={<XML />} />
                        <Route path="failed-tests/:fileName" element={<FailedTests />}/>
                        <Route path="*" element={<NoMatch />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;
