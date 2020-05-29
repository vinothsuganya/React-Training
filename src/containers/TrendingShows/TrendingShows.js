import React, {Component} from 'react';

class TrendingShows extends Component {
	
	state = {
      showsList: [
        { id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: false},
        { id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
        { id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
        { id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
      ]
    };
	
	//when attaching event in an element, .bind(this) is needed to get the context of 'this' keyword
	addWatchlistHandler(index) {
		//console.log(index);
		
		// make use of the showId 
		// duplicate arr using spread operator
		// changing isInWatchList based on index
		
		// work the state immuatble approach
		let items = [...this.state.showsList]; //duplicating array
		items[index].isInWatchList = !items[index].isInWatchList;
		console.log(items);
		this.setState({showsList: items});
		
		/*this.setState ({
		  showsList: [
			{ id: 1, name: 'The Planet Earth', host: 'David Attenborough', isInWatchList: true},
			{ id: 2, name: 'Cricket World Cup 2020', host: 'Ganguly', isInWatchList: false},
			{ id: 3, name: 'Man Vs Wild', host: 'Bear Grylls', isInWatchList: false},
			{ id: 4, name: 'The Planet Earth IV', host: 'David Attenborough', isInWatchList: false}
		  ]
		});*/
	}


	render() {
		let trendingShowList = null;
		if(this.state.showsList && this.state.showsList.length>0) {
			// loop through state showsLsi one by one
			trendingShowList = this.state.showsList.map((show, index) => {
				// compile the li's with state data// return the li's
				return (
					<li className='list-group-item' key={show.id}>
						#{show.id}. {show.name} - hosted by {show.host}
						<button type="button" 
						  className="btn btn-primary btn-sm float-right" 
						  onClick={this.addWatchlistHandler.bind(this, index)}>
							  {show.isInWatchList? 'In WatchList':'Aff to WatchList'}
						</button>
					  </li> 
				)
			});
		}
		return (
		<div>
			<h2 className="display-5">Trending Shows | Lists and Keys Example</h2>
			<ul className="list-group">
				{ /* Will have conditionals */ }
				{ this.state.showsList && this.state.showsList.length > 0 ? 
					trendingShowList : 
					<div className='alert alert-danger'>
						No Trending shows found!
					</div>
				}       
			</ul>
		  </div>
		)
	}
}

export default TrendingShows;
