// components/Footer.js

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-transparent text-white py-4 text-center text-sm">
      <p>&copy; {currentYear} Yusa. All rights reserved.</p>
      
    </footer>
  );
};

export default Footer;
