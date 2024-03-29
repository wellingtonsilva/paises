import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
  return (
    <header className='w-full bg-slate-200 p-3 sm:py-3 mb-5'>
      <div className=' mx-auto max-w-[1400px]'>
        <Link className='flex items-center' href="/">
        <Image className='mr-3' src="/logo.svg" width={48} height={48} alt='Lista de países' />  
        <h1 className='font-bold text-2xl'>Lista de países</h1>
        </Link>
      </div>
    </header>
  )
}

export default Header;