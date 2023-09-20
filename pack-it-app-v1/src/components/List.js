/* STATEFUL FUNCTION COMPONENT */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import data from '../data.js';


export default function List({state}) {
    const [current, setCurrent] = useState("clothes");

    const getItems = (category) => {
        /* Add conditional (default is clothes): 
        if clothes --> iterate clothes array
        if toiletries --> iterate toiletries array
        if misc --> iterate misc array
        if carry-on --> iterate carry-on array */
        let items;
        if (category === "toiletries") {
            items = data.toiletries;
        } else if (category === "miscellaneous") {
            items = data.miscellaneous;
        } else if (category === "carryon") {
            items = data.carryon;
        } else {
            items = data.clothes;
        };

        return items.map( item =>
            <Col key={item}>
                <div className="input-group mb-1">
                    <div className="input-group-text">
                        <Form.Check type={'checkbox'} 
                                    inline
                                    aria-label="checked item"
                        />
                        <input type="number"
                                min="0"
                                max="100" 
                               className="form-control-sm" 
                               aria-label="quantity input" 
                               placeholder={current === 'clothes' ? state.daysOfTravel : 1}></input>
                        <span className="ps-3 text-center">{item}</span>
                    </div>
                </div>
            </Col> )

    };

    return (
        <div>
            <Container className="container-fluid pt-5">
                <h5 className="text-left my-2 mt-4">{current.charAt(0).toUpperCase() + current.slice(1)}</h5>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        <span className="mx-3">Quantity</span>
                        <span>Item</span>
                    </p>
                </div>
                <Row xs={1} md={2} lg={3} 
                    className="align-items-left justify-content-left">
                    {getItems(current)}
                </Row>
                <br />
                <ButtonGroup aria-label="Basic example" className="my-3">
                    <Button id="clothes" variant="primary" onClick={handleClick}>Clothes</Button>
                    <Button id="toiletries" variant="primary" onClick={handleClick}>Toiletries</Button>
                    <Button id="carry on" variant="primary" onClick={handleClick}>Carry On</Button>
                    <Button id="miscellaneous" variant="primary" onClick={handleClick}>Misc</Button>
                </ButtonGroup>
            </Container>
        </div>
    );

    function handleClick(event) {
        event.preventDefault();
        setCurrent(event.target.id);
    };

}

  
