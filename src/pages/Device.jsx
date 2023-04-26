import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { GetDevices } from '../api'
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Livemap from './Livemap';

export default function App() {
  const [devices, setDevices] = useState([]);
  const navigate = useNavigate();
  const goToDeviceData = (d) => {
    navigate(`/deviceData?deviceId=${d.deviceId}`);
  }
  const gotoDevices = () => {
    navigate('/maindevices')
  }

  useEffect(() => {
    GetDevices().then(res => {
      if (res && res.data) {
        setDevices(res.data)
        console.log(res.data);
      }
    })
  }, [])

  return <div style={{ display: 'block', }} className="maindev">

    <div>
      <Header />
      <div className="row">
        <div className="col-md-12">
          <div className='container-fluid mb-4'>
            <div className='row'>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div onClick={gotoDevices} className="cdn-123" >
                  <div className='card-inr'>
                    <p className='mb-2 fs-13'> <i class="fa fa-caret-up scale5 me-2 text-success"></i> Devices</p>
                    <h1>12</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        {/* <div className="col-md-6">
          <Livemap />
        </div> */}
      </div>
      {/* <div className='col-md-12'>
        <div className='card cdn1223'>
          <Table striped hover responsive="md">
            <thead>
              <tr>
                <th>Device</th>
                <th>Device Type</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>

              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
              <tr>
                <td>Demo 1</td>
                <td>4 channel</td>
                <td onClick={() => goToDeviceData(1)}><i className="fa fa-external-link"></i></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div> */}
    </div>
    <Footer />
  </div>
};