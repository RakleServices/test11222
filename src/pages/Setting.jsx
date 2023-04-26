import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Form } from 'react-bootstrap'

function Setting() {
    return (
        <div style={{ display: 'block' }} className="maindev">

            <div>
                <Header />
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="card">
                                    <div className="profile-section">
                                        <h3>Account Section</h3>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Role</Form.Label>
                                                    <Form.Select >
                                                        <option>Select Role</option>
                                                        <option>Admin</option>
                                                        <option>Sub User</option>
                                                        <option>User</option>
                                                    </Form.Select>

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Select File</Form.Label>
                                                    <Form.Control type="file" placeholder="Enter email" />

                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Select date</Form.Label>
                                                    <Form.Control type="date" placeholder="Enter email" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>
                                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                                    <Form.Label>Email address</Form.Label>
                                                    <Form.Control type="email" placeholder="Enter email" />

                                                </Form.Group>
                                            </div>
                                        </div>
                                        <button className='btn btn-primary text-center self-align-center'>Change Profile</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Setting