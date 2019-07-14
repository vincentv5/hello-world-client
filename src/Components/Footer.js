import React from 'react';
const Footer = () => {
  return (
  	<footer className="page-footer font-small blue pt-4 shadow">
  <div className="footer-copyright text-center py-3 " style={{color:'grey',fontWeight:'bold',fontSize:'18px'}}>Powered by:
    <em><img className='footerLogo'  alt = 'helloWorld' src='images/helloWorld.jpg'/></em>
  </div>
</footer>
  );
}

export default Footer;
