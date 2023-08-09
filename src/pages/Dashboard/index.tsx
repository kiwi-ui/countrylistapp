import { FunctionComponent, lazy, Suspense, useRef } from 'react';
import React, { useState, useEffect } from 'react';
import { countryQuery } from '../../services/countries';

interface Country {
  name: string,
  capital: string,
  code: string,
  currency: string,
  emojiU: string
}

const Dashboard: React.FC = () => {

    const [countries, setCountries] = useState<Country[]>([])

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
    }, [])

    return (
      <>
        <section className="container">
            <div className="row">
                {countries.map((country) => {
                  return (
                    <div className="col-lg-4 mb-3 flex-wrap" key={country.code}>
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{country.name}</h5>
                          <p className="card-text">{country.capital}</p>
                          <p className=''>{country.emojiU}</p>
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
