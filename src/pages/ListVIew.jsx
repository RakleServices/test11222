import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import Table from 'react-bootstrap/Table';
import SimpleLineGraph from './ApexChart';
function ListViewBox() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div>
            <Table striped hover responsive="md tbltg">
                <thead>
                    <tr>
                        <th>Tag Name</th>
                        <th>Channel Type</th>
                        <th>Point Value</th>
                        <th>Scaled Value</th>
                        <th>Unit</th>
                        <th>TimeStamp</th>
                        <th>View chart</th>

                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                    <tr>
                        <td>Demo1</td>
                        <td>Demo 2</td>
                        <td>Demo 3</td>
                        <td>Demo 4</td>
                        <td>5</td>
                        <td>12/12/2020</td>
                        <td><Button onClick={() => setModalShow(true)} className='btn-sm'>View</Button></td>
                    </tr>
                </tbody>
            </Table>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default ListViewBox

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Simple LIne GRaph
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4> */}
                <SimpleLineGraph />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}