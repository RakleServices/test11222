import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { GetDevices } from '../api';
import {Deviceinfo} from '../api';
import { AddDeviceInfo } from '../api';
import { RemoveDeviceInfo } from '../api';
import {} from '../api';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import DataTable from 'react-data-table-component';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import LoadingIndicator from '../components/LoadingIndicator';



export default function DeviceInfo() {
    const [addmodalShow, setaddModalShow] = useState(false);
    const [delmodalshow, setdelModalShow] = useState(false);
    const [editdata, seteditdata] = useState({})
    const [selectedid, setselectedid]= useState('');
    const [file, setFile] = useState();
    const [devicename,setDevicename]=useState([]);
    const [isloading,setisloading]=useState(false);
    
    
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setDevicename(e.target.value);

    }
    const gotoDeviceNode = (d) => {
        navigate(`/devicenode?deviceId=${d.deviceid}`);
    }
    
    

    const column = [
        {
            name: "Device ID",
            selector: (row) => row.deviceid,
            sortable: true
        },
        {
            name: "devicename",
            selector: (row) => <p onClick={()=> gotoDeviceNode(row)}>{row.devicename}</p>,
            sortable: true
        },
        {
            name: "friendlyname",
            selector: (row) => row.friendlyname,
            sortable: true
        },
        {
            name: "Device key",
            selector: (row) => row.devicekey,
            sortable: true
        },
        {
            name: "Device logo",
            selector: (row) => row.devicelogo,
            sortable: true
        },
        {
            name: "Message",
            selector: (row) => row.devicedesc,
            sortable: true
        },
        {
            name: "Action",
            selector: (row) => <div className='row'> <div className="col-md-6" onClick={() => showEditModel(true)}><i className='fa fa-edit'></i></div> <div className="col-md-6" onClick={() => showDeleteModal(row.id)}><i className='fa fa-trash '></i></div></div>,
            sortable: true
        },

    ]
    
    const navigate = useNavigate();
    const [device,setDevice]=useState([])

    useEffect(() => {
        Deviceinfos()
    }, [])

///////////// Data geting ////////////////

    const Deviceinfos=()=>{
        setisloading(true);
        Deviceinfo()
        .then(res=>{
            if(res){
                setisloading(false)
                setDevice(res)
            } 
        })
    }
    const onSubmitForm = (body) =>{
        
        // console.log("Submitted")
        AddDeviceInfo(body).then((res) => {
            console.log(res);
            setaddModalShow(false);
            Deviceinfos();
        })

    }
    //////////////
    // const maindevices=(deviceinfo)=>{
    // //     AddDeviceInfo(deviceinfo)
    //         .then(res=>{
    //             if(res){
    //                 setDevice(res);
    //             }
    //             else{
    //                 alert('Invalid feild')
    //             }
    //         })

    // }
    const showDeleteModal=(item)=>{
        debugger;
        setselectedid(item)
        setdelModalShow(true);
    }
     const showEditModel =(item) =>{
        // console.log(item);
        seteditdata(item);
        setaddModalShow(true);

    }

   
    const OnDeleteForm = (deviceid) =>{
        const data = {
            deviceid:deviceid
        }
        RemoveDeviceInfo(data).then((res) => {
            console.log(res.msg)
            console.log(res)
            if(res.msg === "Deleted"){
                console.log("dn")
                setdelModalShow(false);
                Deviceinfos();
            }
            else{
                setdelModalShow(false);
            }
            
        })
    }
    

    return <div style={{ display: 'block' }} className="maindev">

        <div>
            <Header />
            <div className="row">
                <div className="col-md-12">
                    {
                       isloading !==true ? 
                    <div className='card cdn1223'>
                        <DataTable className='striped hover ' style={{ textAlign: "center", borderRadius: "10px" }} columns={column}
                            data={device}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight='500px'
                            highlightOnHover
                            subHeader
                            subHeaderComponent={

                                <div>
                                    <input type="text" placeholder='Search Here' className='w-25 form-control search-c' />
                                    <div>
                                        <button onClick={() => setaddModalShow(true)} style={{ float: "left", marginRight: "10px", padding:"6px", borderRadius: "5px", border: "2px solid transparent", boxShadow: " 0 0 2px #000",backgroundColor:"white" }}>Add Device</button>
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
                    :<LoadingIndicator/>
                    }
                </div>
            </div>
        </div>
        <Footer />
        <AddEditModal
            show={addmodalShow}
            onHide={() => setaddModalShow(false)}
            onSubmitForm={onSubmitForm}
            edidata= {editdata}

        />
        <DeleteDeviceInfo
        show={delmodalshow}
        deleteid={selectedid}
        onHide={()=>setdelModalShow(false)}
        deletedata={OnDeleteForm}
        />
    </div>
};

function AddEditModal(props1) {
    const {show, onHide, onSubmitForm, } = props1;
    const [devicename,setDevicename]=useState('');
    const [devicetypeid, setdevicetypeid] = useState('');
    const [friendlyname, setfriendlyname] = useState('');
    const [devicekey, setdevicekey] = useState('');
    const [devicedesc, setdevicedesc] = useState('');
    const [message,setMessage]=useState('');
    const [logo,setLogo]=useState([]);
    const [devicetype, setdevicetype] = useState([]);

    // const SubmitForm = () => {
    //     onSubmitForm(devicetype);
    //     setdevicetypeid('')
    // }


   const  onSubmitData = () => {
    const body ={
        devicetypeid:devicetypeid,
        devicename:devicename,
        friendlyname:friendlyname,
        devicekey:devicekey,
        devicedesc:devicedesc
    }
    console.log(body);
    onSubmitForm(body);
   }


   
   useEffect(() => {
    
        GetDevices().then((res) => {
            console.log(res)
            setdevicetype(res);
        })
    
}, [])

    return (
        <Modal
            show={props1.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={props1.onHide}
        >
            <Modal.Header closeButton>
                <div className=' modal-title' id="contained-modal-title-vcenter">
                    <h6 className=''>ADD Device Info</h6>
                    
                </div>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="row">
                        <div className="col-md-12">
                        
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Device Name</Form.Label>
                                <Form.Control type="text"name='devicename' onChange={(e)=> setDevicename(e.target.value)} placeholder="Enter Device Name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>friendly name</Form.Label>
                                <Form.Control type="text"name='friendlyname' onChange={(e)=> setfriendlyname(e.target.value)} placeholder="Enter Friendle Name" />

                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Devicekey</Form.Label>
                                <Form.Control type="text"name='devicekey' onChange={(e)=> setdevicekey(e.target.value)} placeholder="Enter Device Key" />

                            </Form.Group>
                            
                            <div className="form-outline">
                            <label className="form-label"   for="textAreaExample">Message</label>
                            <textarea className="form-control" name='devicedesc' onChange={(e)=>setdevicedesc(e.target.value)} id="textAreaExample1" rows="4"></textarea>
                            </div>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Choose node</Form.Label>
                            <select onChange={(e) => setdevicetypeid(e.target.value)} className='form-control'>
                            
                            {
                                devicetype.map((item) => <option value={item.devicetypeid}>{item.devicetype}</option>)
                            }

                            </select>
                            </Form.Group>   
                        </div>
                       
                    </div>

                </form>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={onHide}>Close</Button>
                <Button onClick={onSubmitData}>Submit</Button>
            </Modal.Footer>
        </Modal>
    );
}


 function DeleteDeviceInfo(props) {
    const {show, onHide, deletedata,deviceid } = props;
    const [deletemodel,setDeletemodel]=useState(false);
    const deleteDeviceinfo =() => {
        deletedata(deviceid);
        
    }
    return (
      <>
        
  
        <Modal
          show={props.show}
        //   onHide={onhide}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header >
            <Modal.Title>Delete Device info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are You sure ? You want to delete Device info{props.deletedata}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Close
            </Button>
            <Button variant="primary"onClick={deleteDeviceinfo}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }