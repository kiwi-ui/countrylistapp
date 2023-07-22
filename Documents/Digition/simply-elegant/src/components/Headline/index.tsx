import React from 'react'
import './style.css';

const Headline = () => {
    return (
        <section id="headline" className='d-block bg-headline vh-100 d-flex align-items-center justify-content-center'>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h3 className="title text-color-primary fw-bold m-0">The Wedding Of</h3>
                <p className="text-color-primary fs-1 fw-bold py-2 px-3 m-0" style={{letterSpacing: 2}}>James & Humairoh</p>
                <h4 className="text-white m-0">30-02-2090</h4>
            </div>
        </section>
    )
}

export default Headline