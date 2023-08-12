import React, { useState, useEffect } from 'react';
import { countryQuery } from '../../services/countries';
import NavBar from '../../components/NavBar';
import style from './index.module.css';
import hero from '../../assets/hero.png'
import SearchBar from '../../components/SearchBar';
import Footer from '../../components/Footer';
import DetailModal from '../../components/DetailModal';
import { CountryModel } from '../../Models/CountryModel';

const Dashboard: React.FC = () => {
    const itemsPerPage = 20;
    const [countries, setCountries] = useState<CountryModel[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    function convertUnicodeToHTMLEntity(unicode: string) { return unicode.split(' ').map(codePoint => `&#x${codePoint.slice(2)};`).join('')};
    
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const { data } = await countryQuery();
          setCountries(data.data.countries);
		  console.log(data)
        } catch (error) {
          console.error(error);
        }
    };

      fetchCountries();
    }, []);

    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCountries = filteredCountries.slice(startIndex, endIndex);

	const [selectedCountry, setSelectedCountry] = useState<CountryModel>();
	const [hideModal, setHideModal] = useState(false)
    const handleCountryClick = (country: CountryModel) => {
		setSelectedCountry(country);
		setHideModal(e => !e);
	}
	const closeCountryModal = () => {
		setHideModal(e => !e)
	}
	return (
        <>
            <section>
            	<NavBar/>
            </section>

			{ selectedCountry && ( <DetailModal country={selectedCountry} show={hideModal} onHide={closeCountryModal} />)}
            
			<section className={`${style['bg-hero']} mt-5`}>
                <div className="container">
                	<div className="row">
                		<div className="col-lg-6 my-3 py-5 d-flex flex-column gap-4 align-items-lg-start align-items-center justify-content-center">
                    		<h3 className="fs-2 text-white fw-bold">Lets See The World Together</h3>
							<p className="text-white text-opacity-75 text-center text-md-start">"Global Odyssey: Embark on an Extraordinary Expedition Through the Marvels of Our Planet, Unveiling the Richness of Capitals, Cultures, and Languages in Every Enchanting Country!"</p>
							<button className={`btn ${style['bg-btn']} ${style['shadow-btn']} fw-semibold`}>Get Started</button>
						</div>

						<div className="col-lg-6 d-lg-flex d-none align-items-center justify-content-end">
							<img className="w-75" src={hero} alt="globe"/>
						</div>
					</div>
                </div>
			</section>

			<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  

			<section className="bg-body-secondary py-5">
				<div className="container py-4">
					<div className="row">
					  {currentCountries.map((country) => {
						const flag = convertUnicodeToHTMLEntity(country.emojiU)
							
						return (
							<div className="col-lg-4 col-md-6 mb-3 flex-wrap" key={country.code} onClick={() => handleCountryClick(country)} >
								<div className="card rounded-3 shadow">
									<div className={ `card-img-top ${style[`card-head`]} text-center d-flex align-items-center justify-content-center position-relative` }>
										<span className="mb-3 z10 text-white" style={{ fontSize: '3rem' }} role="img" aria-label={`Flag of ${country.name}`} dangerouslySetInnerHTML={{ __html: flag }} />
									</div>

									<div className="px-3 row">
										<div className="col-4 border-end border-dark border-opacity-25 py-4 fw-bold">
											<p>Name</p>
											<p>Capital</p>
											<p className="mb-0">Currency</p>
										</div>
										
										<div className='col-8 pe-0 py-4'>
											<p className="">{country.name}</p>
											<p className="card-text">{country.capital}</p>
											<p className="mb-0">{country.currency}</p>
										</div>
									</div>
								</div>
							</div>
						)
					  })}
					</div>
				</div>

				<div className="d-flex justify-content-center flex-wrap mt-4">
				{ Array.from({ length: Math.ceil(filteredCountries.length / itemsPerPage) }).map((_, index) => (
					<button key={index} className={` btn ${currentPage === index + 1 ? 'text-primary' : 'text-dark'} mx-1`} onClick={() => setCurrentPage(index + 1)}>
						{index + 1}
					</button>
				))}
				</div>
			</section>
        <Footer/>
      </>
    )
}

export default Dashboard;
