import React from 'react';

import Header from './components/Shared/Header';
import Footer from './components/Shared/Footer';
import Program from './components/Program/Program';
import ChannelList from './containers/ChannelList/ChannelList'
import TrendingShows from './containers/TrendingShows/TrendingShows';
import MyProfile from './containers/MyProfile/MyProfile';
import ContactForm from './containers/ContactForm/ContactForm';
import WithLastLogin from './hoc/WithLastLogin'


// App Component  -- Setting up Layoout
function App() {
	let AppName = "Hexaflix";
  return (
    <div>
	  {/* Header Comp */}	
      <Header />
	  
      
	  <div style={{marginTop: '60px'}} className="container">
        <div className="jumbotron">
            <h1 className="display-4">Welcome to {AppName}!</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Subscribe Now »</a>
        </div>
		
		
        {/* My Program List Comp */}
        <h2 className="display-5">Featured Programs List | Props </h2>
        <Program name="Man vs Wild" time="8PM" category="Adventure">Wild travel adventure program</Program>
		<Program name="Cricket Retro Highlight" time="9PM" category="Sprots">Cricket Highlights</Program>
		<Program name="Plant Earth David by Attenborough" time="10PM" category="Infotainment">Space Research</Program>
		
		<hr />
		
		<ChannelList>Channel List | States Example</ChannelList>
		
		<hr />
		
		<TrendingShows></TrendingShows>
		
		<hr />
		
		<MyProfile></MyProfile>
		
		<hr />
		
		<ContactForm></ContactForm>
		
		<hr/>
		
        <WithLastLogin>
          <div className='alert alert-warning'>
            Last Login: Thu 24, March 2020 | Demo of HOC
          </div>
        </WithLastLogin>

      </div>
	  
	  {/* Footer Comp */}
      <Footer></Footer>
    </div>
  );
}

export default App;
