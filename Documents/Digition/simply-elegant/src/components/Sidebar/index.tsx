import React, { useState } from 'react';
import { BsCalendar } from 'react-icons/bs';
import { BiHomeAlt2, BiEnvelopeOpen } from 'react-icons/bi';
import { RiGalleryLine } from 'react-icons/ri';
import { BiSolidRightArrow } from 'react-icons/bi';
import './style.css';

const Sidebar = () => {
	const [isSideBarHided,setIsSideBarHided] =useState(false);
	const hideSideBar = () => { setIsSideBarHided(e => !e) };

  	return (
		<div className={`${isSideBarHided ? '-start-60' : 'start-0'} position-fixed d-flex flex-row bg-text-primary z-10 position-absolute navbar-transition top-50 translate-middle-y`}>
				<ul className="navbar-nav flex-column align-items-center px-3 py-4 gap-4 d-flex text-white">  
					<li className="nav-item">
						<a className='nav-link active' aria-current="page" type="button" href="#headline"><BiHomeAlt2 className="fs-5"/></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#date"><BsCalendar className="fs-5"/></a>
					</li>
					<li className="nav-item">
						<a className="nav-link"  href="#gallery"><RiGalleryLine className="fs-5"/></a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#wish"><BiEnvelopeOpen className="fs-5"/></a>
					</li>
				</ul>

				<div className="position-absolute text-white start-100 top-50 translate-middle-y">
					<BiSolidRightArrow className="text-color-primary fs-2" onClick={ hideSideBar }/>
				</div>
		</div>
	)
}

export default Sidebar
