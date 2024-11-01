import React from 'react';
import Image from 'next/image'
import appleImg from '../../public/assets/images/apple.svg';
import searchImage from '../../public/assets/images/search.svg';
import bagImg from '../../public/assets/images/bag.svg';

const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <Image
        src={appleImg} alt='Apple' height={14} width={18}
        />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {['Phones', 'Macbooks', 'Tablets'].map((nav)=>(
            <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>
              {nav}
            </div> 
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <Image
          src={searchImage}
          alt='search'
          width={18}
          height={18}
          />
          <Image
          src={bagImg}
          alt='bag'
          width={18}
          height={18}
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar