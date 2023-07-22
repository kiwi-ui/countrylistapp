import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';

const GiftModal = ({isModalShown, toggleModal}: any) => {
    
    return (
        <div className={ `${ isModalShown ? 'd-flex' : 'd-none' } vh-100 w-100 position-fixed top-0 justify-content-center align-items-center`} style={{zIndex: 10, background:"rgb(0,0,0,0.5)"}}>
        <div className="w-50 top-50">
            <div className="bg-color-primary rounded-5">
                <div className="px-2 d-flex justify-content-end">
                    <button className="bg-transparent border-0 fs-2" type="button" onClick={ toggleModal }><GrFormClose /></button>
                </div>

                <div className="text-center p-4">
                    <img src="../assets/img/qr-1.webp" className="h-100" alt="qr code" />
                    <div className="my-2">
                        <p className="fs-3 fw-bold m-0">Juliet Basori</p>
                        <p>091204789789 / Bank Mandiri</p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold" style={{ background: "#2b2b2b" }}>Copy</button>
                        <a href="https://wa.me/082336420166?text=I%20confirm%20that%20I%20have%20sent%20the%20money%20transfer%20for%20the%20wedding%20gift." target="_blank" rel='noreferrer'>
                            <button className="py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold">Konfirmasi</button>
                        </a>
                        </div>
                </div>
                </div>
                </div>
                </div> 
    )
}

export default GiftModal