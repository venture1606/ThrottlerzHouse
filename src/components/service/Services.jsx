import React from 'react'

// importing datas
import ListItems from '../../assests/data/ListItems'

function Services() {

    const { services } = ListItems;
 
  return (
    <div className='ServicesContainer'>
        {
            services.map((service) => {
                return (
                    <div className='ServicesContentContainer' key={service.id}>
                        <h1>{service.title}</h1>
                        <hr/>
                        <div className='ServicesContentDescriptionContainer'>
                            <div className='ServicesContentDescription'>
                                <span>
                                    {service.description}
                                </span>
                            </div>
                            <div className='ServicesBookingFormContainer'>
                                <h2>Book Now</h2>
                                <input type='text' placeholder='Name'/>
                                <input type='text' placeholder='Phone'/>
                                <input type='text' placeholder='Email'/>
                                <input type='date' placeholder='Date'/>
                                <input type='time' placeholder='Time'/>
                                <div className='BookingButtonContainer'>
                                    <button className='ButtonStyle' onClick={() => {window.location.href = "https://wa.me/918248897561"}}>Book Now</button>
                                    <button className='ButtonStyle' onClick={() => {window.location.href = "https://wa.me/918248897561"}}>Chat Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Services