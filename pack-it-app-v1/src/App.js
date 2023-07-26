// TO-DO: 
    // ---> Research and implement CSS

// Import React libraries and stylesheets
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import NewForm from './components/NewForm';
import List from './components/List';
import Navbar from './components/Navbar';


function App() {
    // Initialize state of data for form
    const [state, setState] = useState({
        destination: '',
        travelStartDate: '',
        daysOfTravel: '',
        numOfTravelers: ''
    });

    return (
    <div className='App'>
        <header>
            <Navbar />
        </header>
        <main>
            <Routes>
                <Route exact path='/' element={ <NewForm state={state} setState={setState} />} />
                <Route path='listresults' element={ <List state={state} setState={setState}/>} />
            </Routes>
        </main>
    </div>
    );
}

export default App;