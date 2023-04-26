import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header() {
    const [delmodalShow, setdelModalShow] = React.useState(false);

    return (
        <div>
            <div className="header">
                <div>
                    <div className='hcontent'>
                        <p>Dashboard</p>
                    </div>
                    <div className='hcontent-1'>
                        <div className='himg'>
                            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
                        </div>
                        <div className='h-name'>
                            {/* <h3>Rohit Kushwaha</h3> */}
                            <Dropdown className='no-border' style={{ float: "left" }}>
                                <Dropdown.Toggle className='btn-sm no-border' variant="Secondary" id="dropdown-basic">
                                    Rohit Kushwaha
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setdelModalShow(true)}>Logout</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            {/* <p>Admin</p> */}
                        </div>
                    </div>
                </div>
            </div>
            <DeleteModal
                show={delmodalShow}
                onHide={() => setdelModalShow(false)}
            />
        </div>
    )
}

export default Header
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

