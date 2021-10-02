import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='footContainer'>
        <h4 className='footerLogo'>Daniel Jowett</h4>
        <ul className='footerDetails'>
          <li>Github</li>
          <li>LinkedIn</li>
          <li>Email</li>
        </ul>
        {/* <ul className='footerSocials'>
          <i className='fa fa-twitter fa-2x'></i>
          <i className='fa fa-facebook fa-2x'></i>
          <i className='fa fa-instagram fa-2x'></i>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
