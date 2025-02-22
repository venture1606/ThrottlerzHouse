import React from 'react'
import { useNavigate } from 'react-router-dom'

// importing style
import '../../assests/styles/services.css'

function ServicesHome() {

    const navigate = useNavigate();

  return (
    <div className='ServicesHomeContainer'>
        <div className='ServicesViewContainer'>
            <div className='ServicesView'>
                <div className='ServicesViewImage'>
                    <img src='https://thumbs.dreamstime.com/z/mechanic-wrench-working-repair-car-engine-car-service-centre-mechanic-working-car-motor-auto-repair-service-center-155848022.jpg' alt='services' />
                </div>
                <div className='ServicesViewContent'>
                    <h3>Painting Services</h3>
                    <p>Our services are designed to help you with your business needs. We provide a wide range of services to </p>
                    <button onClick={() => navigate('/service')}>Read More</button>
                </div>
            </div>
            <div className='ServicesView'>
                <div className='ServicesViewImage'>
                    <img src='https://thumbs.dreamstime.com/z/mechanic-wrench-working-repair-car-engine-car-service-centre-mechanic-working-car-motor-auto-repair-service-center-155848022.jpg' alt='services' />
                </div>
                <div className='ServicesViewContent'>
                    <h3>Foam Wash Services</h3>
                    <p>Our services are designed to help you with your business needs. We provide a wide range of services to </p>
                    <button onClick={() => navigate('/service')}>Read More</button>
                </div>
            </div>
            <div className='ServicesView'>
                <div className='ServicesViewImage'>
                    <img src='https://thumbs.dreamstime.com/z/mechanic-wrench-working-repair-car-engine-car-service-centre-mechanic-working-car-motor-auto-repair-service-center-155848022.jpg' alt='services' />
                </div>
                <div className='ServicesViewContent'>
                    <h3>Repairs</h3>
                    <p>Our services are designed to help you with your business needs. We provide a wide range of services to </p>
                    <button onClick={() => navigate('/service')}>Read More</button>
                </div>
            </div>
            <div className='ServicesView'>
                <div className='ServicesViewImage'>
                    <img src='https://thumbs.dreamstime.com/z/mechanic-wrench-working-repair-car-engine-car-service-centre-mechanic-working-car-motor-auto-repair-service-center-155848022.jpg' alt='services' />
                </div>
                <div className='ServicesViewContent'>
                    <h3>Refurnishing</h3>
                    <p>Our services are designed to help you with your business needs. We provide a wide range of services to </p>
                    <button onClick={() => navigate('/service')}>Read More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServicesHome