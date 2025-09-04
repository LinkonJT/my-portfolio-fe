import React from 'react';
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const AppFooter = () => {
    return (
        <div>
              <Footer container className="rounded-none bg-sky-700 text-white ">
      <FooterCopyright href="#" className='text-white'  by="Linkon Tripura" year={2025} />
      <FooterLinkGroup>
        <FooterLink href="#about" className='text-white hover:text-black'>About</FooterLink>
        <FooterLink href="#contact" className='text-white'>Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
        </div>
    );
};

export default AppFooter;