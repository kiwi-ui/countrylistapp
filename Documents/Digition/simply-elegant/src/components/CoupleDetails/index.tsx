import groom from '../../assets/img/groom.jpg';
import bride from '../../assets/img/bride.jpg';
import {BsInstagram} from 'react-icons/bs'

const CoupleDetails = () => {
    return (
        <div className="py-5 text-center bg-color-primary" id="main">
            <div className="container">
                <div className="">
                    <p className="fs-1 fw-semibold">Assalamualaikum Warahmatullahi Wabarakatuh</p>
                    <p className="fs-4">Dengan rahmat ridho Allah Subhanahu Wa Ta'ala, kami menyelenggarakan acara resepsi pernikahan putra-putri kami:</p>
                </div>

                <div className="d-flex flex-row justify-content-around my-4 gap-2">
                    <div className="bride p-xl-4">
                        <img src={ bride } className="rounded-circle my-4" width="70%" alt="bride"/>
                        <p className="fs-2 fw-bold mb-0">Humairoh</p>
                        <p className="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button className="bg-dark text-white pt-1 pb-2 px-2 border-0 rounded-circle">
                            <BsInstagram />
                        </button>
                    </div>
                    <div className="groom p-xl-4">
                        <img src={ groom } className="rounded-circle my-4" width="70%" alt="groom" />
                        <p className="fs-2 fw-bold mb-0">James Washington</p>
                        <p className="fs-5">Putri dari Bapak Achmad dan Ibu Rum</p>
                        <button className="bg-dark text-white pt-1 pb-2 px-2 border-0 rounded-circle">
                            <BsInstagram/>
                        </button>
                    </div>
                </div>

                <div>
                    <p className="m-0 fs-4">Maka dari itu kami mengharap kehadiran dari bapak/ibu tepatnya pada : </p>
                </div>
            </div>
        </div>
  )
}

export default CoupleDetails