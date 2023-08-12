import React, { useState, useEffect } from 'react';
import { countryQuery } from '../../services/countries';
import NavBar from '../../components/NavBar';
import style from './index.module.css';
import hero from '../../assets/hero.png'
import SearchBar from '../../components/SearchBar';

interface Country {
  name: string,
  capital: string,
  code: string,
  currency: string,
  emojiU: string
}

const Dashboard: React.FC = () => {
    const itemsPerPage = 20;
    const [countries, setCountries] = useState<Country[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);

    function convertUnicodeToHTMLEntity(unicode: string) { return unicode.split(' ').map(codePoint => `&#x${codePoint.slice(2)};`).join('')};
    
    useEffect(() => {
      const fetchCountries = async () => {
        try {
          const { data } = await countryQuery();
          setCountries(data.data.countries);
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

    return (
      <>
        <NavBar/>
        
        <section className="mt-5">
            <div className={`${style['bg-hero']}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 my-3 py-5 d-flex flex-column gap-4 align-items-lg-start align-items-center justify-content-center">
                    <h3 className="fs-2 text-white fw-bold">Lets See The World Together</h3>
                    <p className="text-white text-opacity-75 text-center text-md-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat reprehenderit fugiat similique dolorem incidunt voluptatibus asperiores nobis? Deserunt, placeat rem explicabo provident quo adipisci dolores itaque delectus accusamus temporibus cupiditate doloribus assumenda possimus.</p>
                    <button className={`btn ${style['bg-btn']} ${style['shadow-btn']} fw-semibold`}>Get Started</button>
                  </div>
                  <div className="col-lg-6 d-lg-flex d-none justify-content-end">
                    <img className="w-100" src={hero} alt="globe"/>
                  </div>
                </div>
              </div>
            </div>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />  
            
            <div className="container">
              <div className="row">
                  {currentCountries.map((country) => {
                    const flag = convertUnicodeToHTMLEntity(country.emojiU)
                    
                    return (
                      <div className="col-lg-4 col-md-6 mb-3 flex-wrap" key={country.code}>
                        <div className="card">
                          <div className={ `card-img-top ${style[`card-head`]} text-center d-flex align-items-center justify-content-center position-relative` }>
                            <span className="mb-3 z10 text-white" style={{ fontSize: '3rem' }} role="img" aria-label={`Flag of ${country.name}`} dangerouslySetInnerHTML={{ __html: flag }} />
                          </div>

                          <div className="px-3 row">
                            <div className="col-4 border-end border-dark py-4 fw-bold">
                                <p>Name</p>
                                <p>Capital</p>
                                <p className="mb-0">Currency</p>
                            </div>
                            
                            <div className='col-8 py-8 py-4'>
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
      </>
    )
}

export default Dashboard;
