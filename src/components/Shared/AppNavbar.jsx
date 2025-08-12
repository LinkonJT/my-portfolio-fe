import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const AppNavbar = () => {
    return (
           <Navbar fluid className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow">
      <NavbarBrand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LJT</span>
      </NavbarBrand>
     
      <NavbarCollapse>
        <NavbarLink href="#home" active>
          Home
        </NavbarLink>
        <NavbarLink href="#about">About Me</NavbarLink>
        <NavbarLink href="#skills">Skills</NavbarLink>
        <NavbarLink href="#projects">Projects</NavbarLink>
        <NavbarLink href="#education">Education</NavbarLink>
        <NavbarLink href="#experience">Experience</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    );
};

export default AppNavbar;