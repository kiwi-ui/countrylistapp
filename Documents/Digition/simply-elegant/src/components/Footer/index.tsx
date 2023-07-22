import './style.css';
const Footer = () => {
    return (
        <footer className="bg-footer h-100 position-relative" style={{ height: '75vh' }}>
            <div className="container text-white d-flex flex-column text-center gap-3 py-5 h-100 position-relative">
                <p className="fs-1 m-0 fw-bold color-primary">Terimakasih Atas Perhatiannya</p>
                <p className="fs-2 m-0">Keluarga Besar</p>
                <p className="m-0">Bapak Adam & Ibu Hawa</p>
                <p className="m-0">Bapak Idim & Ibu Hiwi</p>
                
                <div className="border-box mt-3">
                    <p className="fw-bold">Made with Love</p>

                    <div className="d-flex flex-row border-box justify-content-center align-content-center gap-1" style={{height: "20px"}}>
                        <p className="fw-bold">Digition</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
