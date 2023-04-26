import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { GetDevices, GetUsers,PostUsers } from '../api'
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import DataTable from 'react-data-table-component';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, ToggleButton } from 'react-bootstrap';
import React from 'react';
import { render } from '@testing-library/react';
import { FaCheck } from 'react-icons/fa';
import LoadingIndicator from '../components/LoadingIndicator';


export default function User() {
    const [addmodalShow, setaddModalShow] = React.useState(false);
    const [assmodalShow, setassModalShow] = React.useState(false);
    const [delmodalShow, setdelModalShow] = React.useState(false);
    const [selected, setSelected] = React.useState(false);
    const [isloading,setisloading] = useState(false);
    const [ddata, setddata] = useState([])
    const GetUserData = () =>{
        GetUsers().then((res) =>{
            setddata(res);
            console.log(res)
        })
    }

  

    const column = [
        {
            name: " User ID",
            selector: (row) => row.userid,
            sortable: true
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true
        },
        {
            name: "Email",
            selector: (row) => row.email,
            sortable: true
        },
        {
            name: "Number",
            selector: (row) => row.mobile,
            sortable: true
        },
        // {
        //     name: "Assign Device",
        //     selector: (row) => <div onClick={() => setassModalShow(true)}><h5><i className='fa fa-external-link'></i></h5></div>,
        //     sortable: true
        // },

        {
            name: "Status",
            selector: (row) => <ToggleButton
                value="check"
                color='red'

                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }}
            >
                <FaCheck />
            </ToggleButton>,
            sortable: true
        },
        {
            name: "Action",
            selector: (row) => <div > <h5 ><i onClick={() => setaddModalShow(true)} className="fa fa-edit newc"></i><i onClick={() => setdelModalShow(true)} className="fa fa-trash newc"></i></h5></div>,
            sortable: true
        },

    ]
    const [devices, setDevices] = useState([]);
    const navigate = useNavigate();
    const goToDeviceData = (d) => {
        navigate(`/devicenode?deviceId=${d.deviceId}`);
    }

    useEffect(() => {
        // setDevices(ddata)
        GetUserData();
        // GetDevices().then(res => {
        //     if (res && res.data) {

        //         console.log(res.data);
        //     }
        // })
    }, [])

    return <div style={{ display: 'block' }} className="maindev">

        <div>
            <Header />
            <div className="row">
                <div className="col-md-12">
                {  
                 isloading !==true ?
                    <div className='card cdn1223'>
                        <DataTable className='striped hover ' style={{ textAlign: "center", borderRadius: "10px" }} columns={column}
                            data={ddata}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight='500px'
                            highlightOnHover
                            subHeader
                            subHeaderComponent={

                                <div>
                                    <input type="text" placeholder='Search Here' className='w-25 form-control search-c' />
                                    <div>
                                        <button onClick={() => setaddModalShow(true)}style= {{ float: "left", marginRight: "10px", padding:"6px", borderRadius: "5px", border: "2px solid transparent", boxShadow: " 0 0 2px #000",backgroundColor:"white" }}>Add Device</button>
                                        <Dropdown style={{ float: "left" }}>
                                            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                                                Filter Data
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">Location</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Status</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Agent</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">User</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Device Type</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            }
                        />
                    </div>
                :<div><LoadingIndicator/></div>
                }
                </div>
            </div>
        </div>
        <Footer />
        
        <AddEditModal
            show={addmodalShow}
            onHide={() => setaddModalShow(false)}
        />
        <DeleteModal
            show={delmodalShow}
            onHide={() => setdelModalShow(false)}
        />
    </div>
};






function AddEditModal(props1) {
    return (
        <Modal
            {...props1}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className=' modal-title' id="contained-modal-title-vcenter">
                    <h6 className=''>Add User</h6>
                </div>
            </Modal.Header>
            <Modal.Body>
                <form >
                    <div className="row">
                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User ID</Form.Label>
                        <Form.Control type="email" placeholder="Enter User ID" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User Password</Form.Label>
                        <Form.Control type="text" placeholder="Enter Password" />

                    </Form.Group>
                    </div>

                    <div className="col-md-6">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter Mobile number" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Registration Date</Form.Label>
                        <Form.Control type="Date" placeholder="Enter Date" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter Location" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select >
                            <option>Select Role</option>
                            <option>Admin</option>
                            <option>Sub User</option>
                            <option>User</option>
                        </Form.Select>
                    </Form.Group>
                    </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
            
                <Button onClick={props1.onHide} >Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}

function DeleteModal(props2) {
    return (
        <Modal
            {...props2}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className=' modal-title' id="contained-modal-title-vcenter">
                    <h6 className=''>Delete User</h6>
                </div>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure ? You want to delete</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props2.onHide}>Close</Button>
                <Button onClick={props2.onHide}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}
