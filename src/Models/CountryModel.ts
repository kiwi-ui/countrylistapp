export interface CountryModel {
	name: string
	capital: string;
	currency: string;
	languages: { name: string }[]; 
	continent: { name: string };
	code: string;
	emojiU: string;
};
