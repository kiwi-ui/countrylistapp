import {BiSearchAlt2} from 'react-icons/bi';
import {RiAccountCircleLine} from 'react-icons/ri';

const NavBar: React.FC = () => {
  return (
    <>
		<nav className="navbar fixed-top bg-white z10">
            <div className="container">
                <a className="fs-4 mb-0 borel mt-3 fw-semibold navbar-brand" href='_blank' rel='norefferer'>CrossOver</a>

                <form className="d-flex align-items-center gap-2" role="search">
                    <BiSearchAlt2 className="fs-4 fw-bold" />
                    <RiAccountCircleLine className="fs-3" />
                </form>
            </div>
        </nav>
    </>
  )
}

export default NavBar
