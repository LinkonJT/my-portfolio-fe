import { Navbar, NavbarLink } from 'flowbite-react';
import React from 'react';
import { GoMoveToTop } from "react-icons/go";

const GoTop = () => {
    return (

          <Navbar rounded className='mb-2 max-w-20 mx-auto list-none'>
            <NavbarLink href="#navbar" className='flex items-center justify-center'>Top<GoMoveToTop /></NavbarLink>
          </Navbar>
            
           
       
    );
};

export default GoTop;