/* STATELESS FUNCTION COMPONENT */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import data from '../data.js';


export default function List({state}) {    
    // Store category list items in objects
        /// Reasoning behind decision -- most items in the list will typically remain the same, therefore data will NOT
        /// change significantly over time.

    // const groupItems = (array) => {
    //     const size = 3;
    //     const subArr = [];
    //     for (let i=0; i<array.length; i++) {
    //         const last = subArr[subArr.length-1];
    //         if(!last || last.length === size) {
    //             subArr.push([array[i]]);
    //         } else {
    //             last.push(array[i]);
    //         }
    //     };
    //     return subArr;
    // };

    // const createCheckBox = () => {
    //     <Form>
    //     {['checkbox', 'radio'].map((type) => (
    //         <div key={`default-${type}`} className="mb-3">
    //             <Form.Check 
    //             type={type}
    //             id={`default-${type}`}
    //             label={`default ${type}`}
    //             />
    //         </div>
    //     ))}
    //     </Form>
    // }

    const listItems = data.clothes.map( item =>
            <Col key={item} >
                <div class="input-group mb-1">
                    <div class="input-group-text">
                        <Form.Check type={'checkbox'} 
                                    inline
                                    aria-label="checked item"
                        />
                    </div>
                    <input type="number" class="form-control" aria-label="Text input with checkbox"></input>
                    {item}
                </div>
            </Col> )
    
    // 2. Create markup of list using array of item categories
        // 2.a. Display one category per page
        // 2.b. Add buttons to click to other category pages
    return (
        <div>
            {/* Add conditional (default is clothes): 
            if clothes --> iterate clothes array
            if toiletries --> iterate toiletries array
            if misc --> iterate misc array
            if carry-on --> iterate carry-on array */}
            <Container className="container-fluid border">
                <h2 className="text-left my-3">Clothes:</h2>
                <div>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"></path>
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"></path>
                        </svg>
                        <span> Quantity </span><span> Item </span>
                    </p>
                </div>
                <Row xs={1} md={2} lg={3} 
                    className="align-items-center justify-content-left gx-1 row gy-1">
                    {listItems}
                </Row>
                <br />
                <ButtonGroup aria-label="Basic example" className="my-3">
                    <Button variant="primary">Clothes</Button>
                    <Button variant="primary">Toiletries</Button>
                    <Button variant="primary">Miscellaneous</Button>
                    <Button variant="primary">Carry On</Button>
                </ButtonGroup>
            </Container>
        </div>
    );

}

  
