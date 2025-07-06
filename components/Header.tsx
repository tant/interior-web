'use client';

import {useEffect, useState} from 'react';

//Components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import NavMobile from './NavMobile';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${header ? 'py-4 bg-tertiary shadow-lg dark:bg-accent' : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}>

      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <Logo />
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-all'
              underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            {/* Theme Toggler */}
            <ThemeToggler />
            <div className='xl:hidden'>
              <NavMobile/>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;