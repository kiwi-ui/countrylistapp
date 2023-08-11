import React, { useState, useEffect } from 'react';
import { countryQuery } from '../../services/countries';
import NavBar from '../../components/NavBar';
import style from './index.module.css';

interface Country {
  name: string,
  capital: string,
  code: string,
  currency: string,
  emojiU: string
}

const Dashboard: React.FC = () => {

    const [countries, setCountries] = useState<Country[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
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

    return (
      <>
        <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        
        <section className="container my-3">
            <div className="row">
                {filteredCountries.map((country) => {
                  const flag = convertUnicodeToHTMLEntity(country.emojiU)
                  
                  return (
                    <div className="col-lg-4 mb-3 flex-wrap" key={country.code}>
                      <div className="card border border-dark">
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
        </section>
      </>
    )
}

export default Dashboard;
