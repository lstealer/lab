import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import './Report.css'


export default class Report extends Component {
    render() {
        return (
            <div className='page'>
                <div className='row m-0 p-0'>
                    <div className='col-md-12 column-style'>
                        <div className='form-container'>
                            <h3 className='form-header'>មតិយោបល់</h3>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Control 
                                    placeholder='សូមផ្តល់មតិយោបល់ទីនេះ'
                                    as="textarea" 
                                    rows="4" 
                                />
                            </Form.Group>
                            <center>
                            <Button
                                className="rounded-pill signup-button-style"
                                variant="primary"
                                type="submit"
                            >
                                បញ្ជូន
                                </Button>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
