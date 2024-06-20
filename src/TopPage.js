import React, { useState } from 'react';
import { ServiceInfo, serviceData } from './ServiceInfo';
import ContactComp from './ContactComp';

const TopPage = () => {
    const topPageData = {
        title: "Hotel Search Application",
        description: "In this app, you can check the list of available hotel rooms, pricing information, and service details.",
    };

    const [roomList, setRoomList] = useState([
        { roomNumber: 101, type: "Single", price: 100, image: "images/1.jpeg", services: serviceData.slice(0, 2), availability: true },
        { roomNumber: 223, type: "Double", price: 150, image: "images/2.jpeg", services: serviceData.slice(1, 3), availability: false },
        { roomNumber: 345, type: "Twin", price: 200, image: "images/3.jpeg", services: serviceData.slice(0, 3), availability: true },
        { roomNumber: 467, type: "Suite", price: 300, image: "images/4.jpeg", services: serviceData.slice(1, 2), availability: false },
        { roomNumber: 589, type: "Japanese Style", price: 120, image: "images/5.jpeg", services: serviceData.slice(4), availability: true },
        { roomNumber: 601, type: "Loft", price: 180, image: "images/6.jpeg", services: serviceData.slice(1, 4), availability: false },
        { roomNumber: 723, type: "Studio", price: 250, image: "images/7.jpeg", services: serviceData.slice(1, 3), availability: true },
        { roomNumber: 845, type: "Penthouse", price: 400, image: "images/8.jpeg", services: serviceData.slice(1, 3), availability: false },
        { roomNumber: 967, type: "Junior Suite", price: 280, image: "images/9.jpeg", services: serviceData.slice(2, 4), availability: true },
        { roomNumber: 1089, type: "Executive", price: 350, image: "images/10.jpeg", services: serviceData.slice(3, 4), availability: false }
    ]);

    const [roomListVisible, setRoomListVisible] = useState(false);
    const [showContactComp, setShowContactComp] = useState(false);

    const handleRoomListClick = (event) => {
        event.preventDefault();
        setShowContactComp(false)
        setRoomListVisible(prev => !prev);
    };

    const handleContactClick = (event) => {
        event.preventDefault();
        setRoomListVisible(false)
        setShowContactComp(prev => !prev);
    };

    return (
        <>
            <p style={{ fontSize: '16px', color: '#333' }}>
                {topPageData.description}
            </p>
            <ServiceInfo />

            <button style={{ padding: '8px', margin: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
            onClick={handleRoomListClick}>Room List</button>
            <button style={{ padding: '8px', margin: '5px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} 
            onClick={handleContactClick}>Contact</button>

            {roomListVisible && (
                <div style={{ display: 'flex', justifyContent:'center' }}>
                    <ul style={{ listStyleType: 'none' }}>
                        {roomList.map(room => (
                            <li key={room.roomNumber} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', listStyleType: 'none', padding:'10px',width:'100%' }}>
                                <img src={process.env.PUBLIC_URL + '/' + room.image} alt={room.type} style={{ marginRight:'20px', width: '100%', height: 'auto' }} />
                                <div>
                                    <h3 style={{ fontSize:'28px', width:'450px' }}>Room Number: {room.roomNumber}</h3>
                                    <h4>Type: {room.type}</h4>
                                    <p>Price: <b>${room.price}</b></p>
                                    <p>Availability: <span style={{ color: room.availability ? 'green' : 'red' }}>{room.availability ? "Available" : "Fully Booked"}</span></p>
                                    <div style={{ display:'flex', flexDirection:'row', justifyContent:'center', margin:'0px 0px 10px' }}>
                                        Services: {room.services.map((service, index) => (
                                        <li key={index} style={{ listStyleType:'none', margin:'0px 10px' }}>
                                            <span style={{color:'blue'}}>
                                            {service.serviceName}</span></li>
                                    ))}
                                </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {showContactComp && (
                <div>
                    <ContactComp />
                </div>
            )}
        </>

    );
};

export default TopPage;


