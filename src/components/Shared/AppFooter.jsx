import React from 'react';
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

const AppFooter = () => {
    return (
        <div>
              <Footer container className="rounded-none">
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
        </div>
    );
};

export default AppFooter;