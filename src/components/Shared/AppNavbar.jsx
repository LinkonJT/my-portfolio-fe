import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";


const AppNavbar = () => {
    return (
           <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LJT</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Download Resume</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#">About Me</NavbarLink>
        <NavbarLink href="#">Skills</NavbarLink>
        <NavbarLink href="#">Project</NavbarLink>
        <NavbarLink href="#">Education</NavbarLink>
        <NavbarLink href="#">Experience</NavbarLink>
        <NavbarLink href="#">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
    );
};

export default AppNavbar;