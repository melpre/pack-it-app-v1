/* STATEFUL FUNCTION COMPONENT */
import React from 'react';
import suitcases from '../assets/suitcases.jpeg';
import { useNavigate } from 'react-router-dom';

function NewForm({state, setState}) {
    // // Initialize state of data from form
    // const [state, setState] = useState({
    //     destination: '',
    //     travelStartDate: '',
    //     daysOfTravel: '',
    //     numOfTravelers: ''
    // });

    const navigate = useNavigate();

    // Create function that handles state changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setState((prevState) => ({
          ...prevState,
          [name]: value
        }));
        console.log(state);
    };

    // Create function that takes state data and sends to route '/listresults'
    const handleOnSubmit = (event) => {
        event.preventDefault();
        navigate('/listresults');
        // console.log(state);
    }
    
    return (
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <h2>The PackIt! App</h2>
                    <div class="row">
                        <div class="col-4 col-sm-6 border border-bottom-0">
                            <form onSubmit={handleOnSubmit} class="px-3 py-3">
                                <label class="pe-4 pb-2">Where to?</label>
                                <input class="mb-2"
                                    type="text"
                                    placeholder="London, Paris, Timbuktu, etc."
                                    name="destination"
                                    onChange={handleInputChange}
                                />
                                <br />
                                <label class="pe-4 pb-2">When are you going?</label>
                                <input class="mb-2"
                                    type="date"
                                    placeholder="5/19/2023"
                                    name="travelStartDate"
                                    onChange={handleInputChange}
                                />
                                <br />
                                <label class="pe-4 pb-2">How many days?</label>
                                <input class="mb-2"
                                    type="number"
                                    placeholder="10"
                                    name="daysOfTravel"
                                    onChange={handleInputChange}
                                />
                                <br />
                                <label class="pe-4 pb-2">How many people?</label>
                                <input class="mb-2"
                                    type="number"
                                    placeholder="4"
                                    name="numOfTravelers"
                                    onChange={handleInputChange}
                                />
                                <br />
                                <button class="btn btn-primary" type="submit">
                                    Let's pack!
                                </button>
                            </form>
                        </div>
                        <div class="col-8 col-sm-6">
                            <img src={suitcases} width="600" alt="A stack of suitcases" />
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    );

}

export default NewForm;