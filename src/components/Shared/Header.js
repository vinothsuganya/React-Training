import React from 'react';
import Menu from './Menu';
import AppLogo from '../../images/app-logo.png';

// App Component  -- Setting up Layoout
function Header() {
	let AppName = "Hexaflix";
  return (
	<header>
		<nav className="navbar navbar-expand-md navbar-dark bg-dark">
			 <div className="container mt-2 mb-2">
				<a className="navbar-brand" href="#" style={{ backgroundColor:"#ffffff", paddingTop:"3px", paddingBottom:"3px",  paddingLeft:"10px", paddingRight: "10px"}}>
					<img src={AppLogo} height='32' />
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarsExampleDefault">
				  <Menu/>
				</div>
			</div>
		</nav>
	</header>
  );
}

export default Header;
