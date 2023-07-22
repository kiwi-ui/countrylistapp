import React, { useEffect, useState } from 'react';
import {BsCalendarHeart, BsClock, BsPinMap} from 'react-icons/bs';
import {FiMapPin} from "react-icons/fi"
import './style.css';

interface eventInterface  {
    days: null | number,
    hours: null | number,
    minutes: null | number,
    seconds: null | number
}
const EventDetails = () => {
    const [event, setEvent] = useState<eventInterface>({
        days : null,
        hours: null,
        minutes:  null,
        seconds:  null
    })
    const [isEventOver, setIsEventOver] = useState(false)

    useEffect(() => {
        const targetDate: any = new Date('2029-05-01T00:00:00');

        setInterval(() => {
            const currentDate: any = new Date();
            const timeDifference: any = targetDate - currentDate;
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
            setEvent({days, hours, minutes, seconds})

            if (timeDifference <= 0) {
                return (setIsEventOver((event) => !event));
            }
        }, 1000)

    }, [])
    

    return (
        <section id="date" className="border-box bg-color-secondary d-flex justify-content-center h-100 my-4">
            <div className="schedule border-box bg-color-primary h-100 my-5">
                <div className="cover-schedule d-flex align-items-bottom text-white justify-content-end align-items-center text-center flex-column"
                    style={{height: '60vh'}}>
                    <p className="m-0 text-color-primary fs-1 fw-semibold z-10">Waktu dan Tempat</p>
                    <p className="m-0 text-color-primary fs-2 fw-semibold z-10">Pernikahan</p>
                    
                    <div className="mb-5 mt-2 z-10">
                        <p className="m-0">30 Februari 2001</p>
                        <p className="m-0">Hall Unira Dome</p>
                        <p className="m-0">Jalan Dipenogoro, Pamekasan, Jawa Timur</p>
                    </div>
                </div>

                <div className="countdown d-flex align-items-center mt-5 flex-column">
                    <div className="d-flex flex-column align-items-center container">
                        <p className="fs-1 fw-semibold">Resepsi</p>

                        <div className="mx-4 mb-4" style={{borderTop :'0.3rem solid #2b2b2b'}}>
                            <div className="d-flex flex-row align-items-center gap-3 pt-3">
                                <BsCalendarHeart/>
                                <p className="m-0 fs-5">Minggu, 31 Februari 2025</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <BsClock />
                                <p className="m-0 fs-5">10.00 - 13.00 WIB</p>
                            </div>
                            <div className="d-flex flex-row align-items-center gap-3">
                                <BsPinMap className='fs-3 fw-light'/>
                                <p className="m-0 fs-5">Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah Abang, Kota
                                    Jakarta Pusat, DKI Jakarta 10220</p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button className="d-flex flex-row gap-3 align-items-center py-2 px-3 border-0 rounded-2"
                                style={{backgroundColor: "#2b2b2b"}}>
                                <FiMapPin className='text-white' />
                                <p className="m-0 text-white">Lihat Peta</p>
                            </button>
                        </div>
                    </div>

                    <p className="fs-1 m-0 mt-5">Hitung Mundur</p>
                    <p className="fs-2 mb-2 fw-bold">Resepsi</p>

                    {!isEventOver ? 
                        <div className="d-flex flex-row mb-5 text-white border-box mt-2 w-100 justify-content-evenly container">
                            <div className="days text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.days}</p>
                                <p className="fs-5 m-0">Hari</p>
                            </div>
                            <div className="hours text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.hours}</p>
                                <p className="fs-5 m-0">Jam</p>
                            </div>
                            <div className="minutes text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.minutes}</p>
                                <p className="fs-5 m-0">Menit</p>
                            </div>
                            <div className="seconds text-center d-flex align-items-center flex-column p-3 rounded-2 shadow" style={{backgroundColor: "#2b2b2b", width: "20%"}}>
                                <p className="fs-3 m-0">{event.seconds}</p>
                                <p className="fs-5 m-0">Menit</p>
                            </div>
                        </div>
                        :
                        <div>
                            <p>Acara Sudah Selesai</p>
                        </div>
                    }

                </div>
            </div>
        </section>
    )
}

export default EventDetails