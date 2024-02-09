import { CountriesType } from '@/type/CountriesType';
import CountriesCard from '@/components/CountriesCard/CountriesCard';
import Link from 'next/link'
import Image from 'next/image'
import React from 'react' 


// const getCountryByname = async (name:string):Promise<CountriesType> => {
//   const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
//   return (await response.json())[0] ;
// }

const getCountryByname = async (name:string):Promise<CountriesType> => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: CountriesType[] = await response.json();

  return countries.find((country: CountriesType) => country.name.common === name)!;
} 

const getCountryBordersByName = async (name:string) => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const countries: CountriesType[] = await response.json();

  const country = countries.find((country: CountriesType) => country.name.common === name)!;

  return country.borders?.map(border => {
   const borderCountry =  countries.find(country => country.cca3 === border)!
    return {
      name: borderCountry.name.common,
      ptName: borderCountry.translations.por.common,
      flag: borderCountry.flags.svg,
      flagAlt: borderCountry.flags.alt
    }
  } )
}

const Country = async ({params: {name},}: {params: {name:string}}) => {
 const country = await getCountryByname(decodeURI(name));
  const borderCountries = await getCountryBordersByName(decodeURI(name))
 const formatter = Intl.NumberFormat('en', {notation: "compact"})

  return (
    <section className='mx-auto max-w-[1400px] flex flex-col'>
      
      <h1 className='font-bold text-5xl text-center text-slate-800'>{country.translations.por.common}</h1>
      <Link className=' pl-3 md:mb-6 flex py-2' href="/">
      <Image src="/arrow.svg" alt='ìcone de seta voltar' width={24} height={24} />  Voltar
      </Link>
      <article className='flex md:flex-row flex-col justify-between min-h-full p-5 md:p-10 rounded-xl'>
        <section>
          <ul>
            <li className='mb-3'>
              {country.capital && (
                <p className='text-xl text-gray-800'>🏙️ <b>Capital:</b> {country.capital}</p>
              )}
             
            </li>
            <li className='mb-3'>
              <p className='text-xl text-gray-800'>🗺️ <b>Continente: </b> {country.region} {country.subregion && `- ${country.subregion}` } </p>
            </li>
            <li className='mb-3'>
              <p className='text-xl text-gray-800'>👨‍👩‍👧‍ <b>População:</b> {formatter.format(country.population)}</p> 
            </li>
              
              {country.languages && (
                 <li className='mb-3'>
              <p className='text-xl text-gray-800'>🗣️ <b className=''> Linguas faladas:</b> 
                
              </p>
              {Object.values(country.languages).map((language) => (
                  <span key={language} className='inline-block mt-2 text-sm px-2 py-1 bg-indigo-700 mr-2  text-white rounded-full'>{language}</span>
                ))}
              </li>
              )}
             
        
           
          </ul>  
        </section>
        <figure className='relative my-2 h-48 md:h-auto md:w-96 shadow-md md:order-last order-first'>
          <Image src={country.flags.svg} alt={country.flags.alt} fill className='object-cover' />
        </figure>
      </article>

      <section className='p-5 md:pl-3'>
        <h3 className='mt-12 mb-3 text-2xl font-semibold text-gray-800'>Paises que fazem fronteira</h3>
        <div className=''>
          <ul className='mb-3  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
                {borderCountries?.map((border) => (
                  <CountriesCard key={border.name} {...border} />
                ))}
          </ul>
        </div>
      </section>
    </section>
  )
}

export default Country
