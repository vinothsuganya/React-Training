import React from 'react';

import Menu from './Menu';

const Footer = () => {
	const year = 2020;
	// React.createElement used to another way to create jsx
	// rfce create compon short cut
	//<> or <react.fragment>
  return(
  <div style={{ textAlign: 'center'}}>
      <hr />
      <Menu />
      <p>Copyright {year} | Vinoth K </p>
    </div>
  )
}

export default Footer;