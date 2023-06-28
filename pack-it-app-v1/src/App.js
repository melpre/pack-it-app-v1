// TO-DO: 
    // ---> Research and implement CSS

// Import React libraries and stylesheets
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import NewForm from './components/NewForm';
import List from './components/List';


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
        <header class="mt-5">
            {/* <h1 class="text-sm-start ps-5 pe-5 pt-5 pb-5">The PackIt! App</h1> */}
        </header>
        <main>
            <Routes>
                <Route exact path='/' element={ <NewForm state={state} setState={setState} />} />
                <Route path='listresults' element={ <List state={state} />} />
            </Routes>
        </main>
    </div>
    );
}

export default App;