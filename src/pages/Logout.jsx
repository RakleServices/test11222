import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { GetDevices } from '../api'
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DataTable from 'react-data-table-component';
import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';

const Logout = () => {
    const [delmodalShow, setdelModalShow] = React.useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        setdelModalShow(true);

    }, [])
    return <div className="title">
        <DeleteModal
            show={delmodalShow}
            onHide={() => setdelModalShow(false)}
        />
    </div>;
};

export default Logout;

function DeleteModal(props2) {
    const navigate = useNavigate();
    const logoutbtn = () => {
        sessionStorage.clear();
        navigate('/');
        window.location.reload(false);
    }
    const logoutCloseBtn = () => {
        navigate('/');
        // props2.onHide
    }
    return (
        <Modal
            {...props2}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >

            <Modal.Body>
                <p>Are you sure ? You want to logout</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={logoutCloseBtn}>Close</Button>
                <Button onClick={logoutbtn}>Logout</Button>
            </Modal.Footer>
        </Modal>
    );
}

