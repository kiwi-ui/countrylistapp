import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import profileImage from '../../assets/img/g-1.webp';
import './style.css';
import { BsEnvelopeHeart } from 'react-icons/bs'

const Cover = ({hide, setHide}: any) => {
    const { name }: any = useParams();
    const hideCover = () => {
        return setHide(!hide);
    }
    
    return (
        <section className="bg-cover vh-100 text-white text d-flex justify-content-center align-items-center">
            <div className="rounded-5 w-cover z-10">
                <div className='bg-black-50 text-center py-5 rounded-4'>
                    <img className='w-50 rounded-pill py-3' src={ profileImage } alt="pengantin" />
                    <p className='m-0'>UNDANGAN PERNIKAHAN</p>
                    
                    <div className='d-flex flex-column gap-2'>
                        <h2 className="fw-bold text-color-primary">James & Humairoh</h2>
                        <p className="mb-0">Kepada yang terhormat</p>
                        <p className="mb-1">Bapak/Ibu/Saudara</p>
                        <h4 className="mt-2 fw-bold mb-4 text-color-primary">{ name }</h4>
                    </div>

                    <button onClick={ hideCover } className="rounded-4 px-3 py-1 position-relative start-50 translate-middle-x bg-button text-white border-0 d-flex flex-row align-items-center justify-content-center gap-2">
                        <BsEnvelopeHeart/>
                        <span className="text-white text-decoration-none fw-bold">Buka Undangan</span>
                    </button>
                </div>
            </div>
        </section>
  )
}

export default Cover
