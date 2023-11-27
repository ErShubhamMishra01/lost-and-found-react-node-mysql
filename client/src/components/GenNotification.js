import React, { useEffect, useState } from 'react'
import callMyApi from '../ApiCaller';
import star from '../assets/images/star.png'

export default function GenNotification() {
    const [data, setData] = useState([]);

    function getData() {
        callMyApi('dashboard/getNotification', 'GET')
            .then(data => {
                if (data.success === true) {
                    setData(data.data);
                } else {
                   // alert('Unable to get data, please try again later')
                   console.log('Unable to get data, please try again later');
                }
                return data;
            }).catch(e => {
                console.log(e);
            });
    }
    useEffect(() => {
        getData();
    }, []);


    return (
        <div className='row p-2 text-center text-light' style={{ background: "#23aaf2", fontSize:"21px" }}>
            <div className='col-sm-12'>
                <marquee >
                    {data.map((item, i) => (
                        <span key={i}>
                          <img src={star} style={{maxHeight:"30px"}}/>  {item.notification} &emsp;
                        </span>
                    ))}
                </marquee>
            </div>

        </div>
    )
}
