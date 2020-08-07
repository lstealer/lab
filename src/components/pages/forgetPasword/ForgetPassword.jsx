import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import './ForgetPassword.css'

export default class ForgetPassword extends Component {
    render() {
        return (
            <div className='page'>
                <div className='row m-0 p-0'>
                    <div className='col-md-12 column-style'>
                        <div className='form-container'>
                            <h3 className='form-header'>ភ្លេចគណនី</h3>
                            <Form.Group>
                                    <Form.Control 
                                        style={{textAlign:'center'}}
                                        className='rounded-pill'
                                        type="email" 
                                        placeholder="អ៊ីមែល" 
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
