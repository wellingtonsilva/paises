import Link from 'next/link'
import Image from 'next/image'

type CountriesCardProps = {
  name:string;
  ptName:string;
  flag:string;
  flagAlt: string;
}

const CountriesCard = ({name, ptName, flag, flagAlt}:CountriesCardProps) => {
  return (
    <Link href={`/pais/${name}`}>
    <li className='border border-gray-400 rounded-md hover:'>
      <div className='relative w-full h-40 overflow-hidden p-2 rounded-md'>
      <Image 
        src={flag} 
        alt={flagAlt}
        className='w-[100%] object-cover' 
        fill 
      /> 
      </div>
      <p className='font-bold p-3'>{ptName}</p>
    </li>
    </Link>
  )
}

export default CountriesCard;