const baseUrl = 'http://wizelabs.net:3000';
const responseHandle = (res) => {
    if (res.status == 200) {
        return res.json();
    } else if (res.status == 500 || res.status == 400) {
        res.json.then(console.err);
        return;
    } else if (res.status == 403) {
        sessionStorage.clear();
        window.location.reload(false);
    }
}


const LoginUser = (email, password) => {
    return fetch('http://wizelabs.net:3000/api/adminuser/auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify({ email, password }),
    }).then(responseHandle)
}

const GetDevices = () => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/devicetype', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const AddDeviceType = (devicetype) => {
    // debugger;
    const token = sessionStorage.getItem('token');
    return fetch(`http://wizelabs.net:3000/api/devicetype`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ devicetype })
    }).then(responseHandle)
}
const AddDeviceNode = (devicetype) => {
    // debugger;
    const token = sessionStorage.getItem('token');
    return fetch(`http://wizelabs.net:3000/api/devicenode`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(devicetype)
    }).then(responseHandle)
}
const DeleteDeviceType = (devicetypeid) => {
    // debugger;
    const token = sessionStorage.getItem('token');
    return fetch(`http://wizelabs.net:3000/api/devicetype`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ devicetypeid })
    }).then(responseHandle)
}



const Deviceinfo = () => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/deviceinfo', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const AddDeviceInfo = (deviceinfo) => {
    const token = sessionStorage.getItem('token');
    return fetch(`http://wizelabs.net:3000/api/deviceinfo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(deviceinfo)
    }).then(responseHandle)
}

const RemoveDeviceInfo = (deviceid) => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/deviceinfo', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(deviceid)

    }).then(responseHandle)
}

const GetDeviceData = (deviceId) => {
    const token = sessionStorage.getItem('token');
    return fetch(baseUrl + `/api/deviceData/${deviceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const GetUsers = () => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const PostUsers = () => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify()
    }).then(responseHandle)
}

const GetDeviceNode = (id) => {
    const token = sessionStorage.getItem('token');
    return fetch(`http://wizelabs.net:3000/api/devicenode/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const GetDeviceConfigs = (deviceId) => {
    const token = sessionStorage.getItem('token');
    return fetch(baseUrl + `/api/configs/${deviceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(responseHandle)
}

const UpdateFTP = ({ deviceId, body }) => {
    const token = sessionStorage.getItem('token');
    return fetch(baseUrl + `/api/ftp/${deviceId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}
const AllotDeviceTOUser = (body) => {
    const token = sessionStorage.getItem('token');
    return fetch('http://wizelabs.net:3000/api/allotdevice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(body)
    }).then(responseHandle)
}

export {
    LoginUser,
    GetDevices,
    AddDeviceType,
    RemoveDeviceInfo,
    Deviceinfo,
    AddDeviceInfo,
    GetDeviceData,
    GetUsers,
    PostUsers,
    GetDeviceNode,
    GetDeviceConfigs,
    UpdateFTP,
    DeleteDeviceType,
    AddDeviceNode,
    AllotDeviceTOUser
}