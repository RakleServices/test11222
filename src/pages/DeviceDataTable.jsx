import { useEffect, useState } from 'react';
// import Table from 'react-bootstrap/Table';
import moment from 'moment';
import { GetDeviceData } from '../api';
import { Row } from 'antd'

import './tags.css';
import { FaList } from 'react-icons/fa';
import GridVIewBox from './GridVIewBox';
import ListViewBox from './ListVIew';
export default function DeviceDataTable({ listgrid }) {
    const [view, setview] = useState(false)
    const [deviceData, setDeviceData] = useState([]);
    // const fetchDeviceData = () => {
    //     if (device && device.deviceId) {
    //         GetDeviceData(device.deviceId)
    //             .then(res => {
    //                 if (res && res.data) {
    //                     setDeviceData(res.data);
    //                 }
    //             })
    //     }
    // }
    // useEffect(() => {
    //     fetchDeviceData();
    //     setInterval(fetchDeviceData, 3 * 60000);
    // }, [device]);
    return (<div className='maindev' style={{ display: 'block', }}>
        <div>
            <div className="row">
                <div className="col-md-12">

                    {
                        listgrid === true ? <>
                            <GridVIewBox />

                        </> : <><ListViewBox /></>
                    }



                </div>
            </div>
        </div>

    </div>
    )
}