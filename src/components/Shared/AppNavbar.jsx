import React from 'react';
import { Button, createTheme, DarkThemeToggle, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const AppNavbar = () => {




    return (
    
            <Navbar fluid className="sticky top-0 z-30 bg-sky-700 dark:bg-sky-700">
      <NavbarBrand href="">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold  text-gray-200 dark:text-white">LinkonJT</span>
      </NavbarBrand>
 <div className="flex items-center gap-2 md:order-2">
    {/* <DarkThemeToggle />   switches between light/dark and saves preference */}
    <NavbarToggle />
  </div>
     
      <NavbarCollapse>
        <NavbarLink  className="hover:!text-sky-300 hover:bg-sky-500 dark:hover:text-white text-gray-200" href="#home" >
          Home
        </NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#about">About Me</NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#skills">Skills</NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#projects">Projects</NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#education">Education</NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#experience">Experience</NavbarLink>
        <NavbarLink  className="hover:!text-sky-300 dark:hover:text-white hover:bg-sky-500 text-gray-200" href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
     
    );
};

export default AppNavbar;