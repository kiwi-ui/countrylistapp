import React from 'react'
import { CountryModel } from '../../Models/CountryModel';

interface DetailModalProps {
    country: CountryModel;
    show: boolean;
    onHide: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({country, show, onHide}) => {
  function convertUnicodeToHTMLEntity(unicode: string) { return unicode.split(' ').map(codePoint => `&#x${codePoint.slice(2)};`).join('')};
  const flag = convertUnicodeToHTMLEntity(country.emojiU);

  return (
    <div className={`modal ${show ? 'd-block' : ''} bg-dark bg-opacity-50`} tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-md position-relative translate-middle-x translate-middle-y top-50" role="document">
            <div className="container modal-content">
                <div className="modal-header">
                        <h4 className="modal-title fs-2 fw-semibold">Details</h4>
                        <button type="button" className="btn-close" onClick={onHide} aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <div className="py-2">
                            <p className="m-0 fs-4">{country.name}(<span style={{fontSize: '1.5rem'}} role="img" aria-label={`Flag of ${country.name}`} dangerouslySetInnerHTML={{ __html: flag }} />)</p>
                        </div>

                        <div className="py-2">
                            <strong>Capital</strong> 
                            <p className="mb-0">{country.capital}</p>
                        </div>
                        
                        <div className="py-2">
                            <strong>Currency</strong> 
                            <p className="mb-0">{country.currency}</p>
                        </div>

                        <div className="py-2">
                            <strong>Languages</strong>
                            <p className="mb-0">{country.languages.map((language)=> ( <span key={language.name}>{language.name},</span>))}</p>
                        </div>

                        <div className="pb-2">
                            <strong>Continent</strong>
                            <p className="mb-0">{country.continent.name}</p> 
                        </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DetailModal
