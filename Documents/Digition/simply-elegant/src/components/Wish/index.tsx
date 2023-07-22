import React, { useState } from 'react'

interface formData {
    name: string,
    harapan: string
}

const Wish = () => {
    const [formData, setFormData] = useState<formData>({
        name: '',
        harapan: '',
    });
    const [isInputEmpty, setIsInputEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const handleNameChange = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            name: e.target.value
        }));
    };  
    const handleWishChange = (e: any) => {
        setFormData((prevData) => ({
            ...prevData,
            harapan: e.target.value
        }));
    };
    const handleSubmit = (event: any) =>  {
        event.preventDefault();
        const url: string = 'https://script.google.com/macros/s/AKfycbyIT5in_dIBW9rhRRlGMbNqhMBjAxGUFVcQVPHsRRkirSjBT9-rewkr8WRZ158_Ytsg/exec';
        const form: any = document.getElementById('form');

        if (!formData.name || !formData.harapan) {
            setIsInputEmpty((e) => !e)
            setIsSuccess(e => !e)
            return;
        }
        fetch(url, { method: 'POST', body: new FormData(form) })
        .then(() => {
            setIsLoading(e => !e)
            form.reset();
            setFormData({name:'', harapan:''})
            setIsSuccess(true) 
            setTimeout(() => {
                setIsSuccess(false)
            }, 1500);
        })
        .catch(() =>  {
            setIsLoading(e => !e)
            alert('Terjadi Kesalahan!')
        }
        );
        setIsLoading(e => !e)
    }

    return (
        <section id="wish" className="wish bg-color-secondary vh-100 d-flex align-items-center border-box">
            <div className="container w-75 bg-color-primary rounded-4 shadow-lg d-flex flex-column justify-content-center">
                <div id="wish" className="wish py-5 container">
                    <p className="fs-1 fw-semibold m-0 text-center">Harapan</p>
                    <p className="fs-5 text-center mb-3">Suatu kehormatan untuk kami menerima harapan baik dari saudara/saudari</p>

                    <form name="submit-to-google-sheet" id="form" className="form-wrapper row py-1" method="post">
                        <div className="col-md-6 col-12 my-md-3">
                            <input className="w-100 p-3 rounded-1 border-0" name="nama" type="text" placeholder="Nama" onChange={ handleNameChange } value={ formData.name }/>
                            { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama anda</p> }
                        </div>
                        <div className="col-md-6 col-12 my-2 my-md-3">
                            <input className="w-100 p-3 rounded-1 border-0" name="no" type="number" placeholder="Nomor ponsel (opsional)" />
                        </div>
                        <div className="col-12">
                            <textarea className="w-100 pb-5 pt-2 px-3 rounded-1 border-0" name="harapan" placeholder="Harapan untuk pengantin" onChange={ handleWishChange } value={ formData.harapan } required />
                            { isInputEmpty && <p className="m-0 text-danger fw-bold ps-1">Harap isikan nama harapan anda untuk kepengantin</p> }
                        </div>
                    </form>

                    <div className="pt-4 w-100 d-flex flex-column align-items-end position-relative">
                        <a href='blank' type="submit" className={`py-2 px-4 position-relative rounded-2 border-0 text-white fw-semibold ${isLoading ? 'disabled' : '' } btn`} aria-disabled="true" style={{backgroundColor: "#2b2b2b"}} onClick={ handleSubmit }>
                            { isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : 'Submit' }
                        </a>
                        { isSuccess && <p className="position-relative bg-text-primary">Pesan Terkirim!</p> }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wish
