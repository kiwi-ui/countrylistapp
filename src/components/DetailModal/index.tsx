import React from 'react'
interface Country {
	name: string
	capital: string;
	currency: string;
	languages: { name: string }[]; 
	continent: { name: string };
	code: string;
	emojiU: string;
}

interface DetailModalProps {
    country: Country;
    show: boolean;
    onHide: () => void;
}

const DetailModal: React.FC<DetailModalProps> = ({country, show, onHide}) => {
  function convertUnicodeToHTMLEntity(unicode: string) { return unicode.split(' ').map(codePoint => `&#x${codePoint.slice(2)};`).join('')};
  const flag = convertUnicodeToHTMLEntity(country.emojiU);

  return (
        <div className={`modal ${show ? 'd-block' : ''} bg-dark bg-opacity-50`} tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-md position-relative translate-middle-x translate-middle-y top-50" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title text-center">{country.name} Detail Information</h4>
                        <button type="button" className="btn-close" onClick={onHide} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="py-2">
                            <strong>Country Name:</strong> <span>{country.name}</span>
                        </div>

                        <div className="py-2">
                            <strong>Country Code:</strong><span className="fw-light" style={{fontSize: '1.5rem'}} role="img" aria-label={`Flag of ${country.name}`} dangerouslySetInnerHTML={{ __html: flag }} />
                        </div>

                        <div className="py-2">
                            <strong>Capital:</strong> {country.capital}
                        </div>
                        
                        <div className="py-2">
                            <strong>Currency:</strong> {country.currency}
                        </div>

                        <div className="py-2">
                            <p><strong>Languages:</strong>{country.languages.map((language)=> ( <span key={language.name}>{language.name},</span>))}</p>
                        </div>

                        <div className="py-2">
                            <strong>Currency:{country.continent.name}</strong> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailModal
