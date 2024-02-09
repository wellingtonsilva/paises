import { CountriesType } from '@/type/CountriesType';
import CountriesCard from '@/components/CountriesCard/CountriesCard';
import Image from 'next/image'
import Link from 'next/link';

const getCountries = async ():Promise<CountriesType[]> => {
  const response = await fetch('https://restcountries.com/v3.1/all');
  return response.json();
}

export default async function Home() {
  const countries = await getCountries();
  return (
    <section className='mx-auto max-w-[1400px]'>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 p-2'>
        {countries.map((country) => (
           <CountriesCard 
            key={country.name.common}
            name={country.name.common}
            ptName={country.translations.por.common}
            flag={country.flags.svg} 
            flagAlt={country.flags.alt} 
         />
        ))}
      </ul>
      </section>
  )
}
