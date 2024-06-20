import React from 'react'


const serviceData = [
    { serviceName: "Breakfast", description: "Breakfast service provided by the hotel" },
    { serviceName: "Wi-Fi", description: "High-speed Wi-Fi service available in all rooms" },
    { serviceName: "Parking", description: "Convenient parking facilities for guests" },
    { serviceName: "Room Service", description: "24-hour room service for guest convenience" },
    { serviceName: "Fitness Center", description: "Fully equipped fitness center for guests" }
    ]

const ServiceInfo = () => {
  return (
    <>
        <h2>Service Information</h2>
        <ul style={{ listStyleType: 'none', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '0 20px' }}>
        {serviceData.map(service => (
                <li key= {service.serviceName} style={{display:'flex', flexDirection:'column',  textAlign: 'center', border: '1px solid blue', padding: '2px' }}>
                    <p><b>{service.serviceName}</b></p>
                    <p>{service.description}</p>
                </li>
            ))}
        </ul>

    </>
  )
}
export { serviceData, ServiceInfo }
