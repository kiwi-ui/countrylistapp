import { FunctionComponent, lazy, Suspense, useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { countryQuery } from '../../services/countries';
import SearchBar from '../../components/SearchBar';
import NavBar from '../../components/NavBar';

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
          setCountries(data.data.countries)
          console.log(data.data.countries)
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
        
        <section className="container">
            <div className="row">
                {filteredCountries.map((country) => {
                  const flag = convertUnicodeToHTMLEntity(country.emojiU)
                  return (
                    <div className="col-lg-4 mb-3 flex-wrap" key={country.code}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{country.name}</h5>
                          <p className="card-text">{country.capital}</p>
                          <span role="img" aria-label={`Flag of ${country.name}`} dangerouslySetInnerHTML={{ __html: flag }} />
                          <p className=''>{country.currency}</p>
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
