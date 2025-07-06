'use client';

import React from 'react';

//Components
import Logo from './Logo';
import ThemeToggler from './ThemeToggler';
import Nav from './Nav';
import NavMobile from './NavMobile';

const Header = () => {
  return (
    <header>
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