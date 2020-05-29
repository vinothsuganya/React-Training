/* Class Component
	if we are passing props in class we need to use this keyword and it will get form extends component or else we need to constructor by calling super method were passing proops in arg...
*/
import React, {Component} from 'react';
import starSportsImg from '../../images/Star-Sports.jpg';
import hboImg from '../../images/HBO.jpg';
import natGeoImg from '../../images/Nat-Geo.jpg';


class ChannelList extends Component {
	/* old way codibg
	constructor(props){
		super();
		this.state = [{
			channelName: "Star Sports",
			desc: '#1 Sports Channel'
		}, {
			channelName: "HBO",
			desc: 'Entertainment Channel'
		}, {
			channelName: "NatGeo",
			desc: 'Infotainment Channel'
		}],
		channelManager: "Vinoth"
	}*/
	state = {
		channelList: [{
			channelName: "Star Sports",
			desc: '#1 Sports Channel',
			img: ''
		}, {
			channelName: "HBO",
			desc: 'Entertainment Channel'
		}, {
			channelName: "NatGeo",
			desc: 'Infotainment Channel'
		}],
		channelManager: "Vinoth"
	}
	addToFavHandler = () => {
		console.log("Clicked");
		// this.state.channelList[0].channelName = "Star Sports 2"; - Not recomended one and its wont re render the components
		
		// change state will re-render the component
		// expensive --- bcz it will result in re-render of the UI
		// Only if needed you have to change state
		// setState will merge the change with the properties of state object
		this.setState({
			channelList: [{
				channelName: "Star Sports [Added]",
				desc: '#1 Sports Channel'
			}, {
				channelName: "HBO",
				desc: 'Entertainment Channel'
			}, {
				channelName: "NatGeo",
				desc: 'Infotainment Channel'
			}]
		}, () => {
			// this callback will print once render complete
			console.log('After changing state');
			console.log(this.state.channelManager);
		});				
	}
	render() {
		// this will invoke when render component
		console.log(this.props);
		console.log(this.state.channelList[0].channelName);
		return (
			<div className="text-left">
				<h2 className="display-5">{this.props.children}</h2>
				<div className="row">
				  
				  <div className='col-md-3'>
					<div className="card">
					  <div className="card-body">
						<img className="card-img-top" style={{height: "190px", marginBottom: "20px"}} src={starSportsImg} />
						<h5 className="card-title">{this.state.channelList[0].channelName}</h5>
						<p className="card-text">{this.state.channelList[0].desc}</p>
						<div className="text-center">
							<button type="button" onClick={this.addToFavHandler} className="btn btn-primary">
							  Add to Fav
							</button>
						</div>
					  </div>
					</div>
				  </div>
				  
				  <div className='col-md-3'>
					<div className="card">
					  <div className="card-body">
						<img className="card-img-top" style={{height: "190px", marginBottom: "20px"}} src={hboImg} />
						<h5 className="card-title">{this.state.channelList[1].channelName}</h5>
						<p className="card-text">{this.state.channelList[1].desc}</p>
						<div className="text-center">
							<button type="button" onClick={this.addToFavHandler} className="btn btn-primary">
							  Add to Fav
							</button>
						</div>
					  </div>
					</div>
				  </div>
				  
				  <div className='col-md-3'>
					<div className="card">
					  <div className="card-body">
						<img className="card-img-top" style={{height: "190px", marginBottom: "20px"}} src={natGeoImg} />
						<h5 className="card-title">{this.state.channelList[2].channelName}</h5>
						<p className="card-text">{this.state.channelList[2].desc}</p>
						<div className="text-center">
							<button type="button" onClick={this.addToFavHandler} className="btn btn-primary">
							  Add to Fav
							</button>
						</div>
					  </div>
					</div>
				  </div>
				
				</div>
			</div>
		)
	}
}

export default ChannelList;
