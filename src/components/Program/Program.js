import React from 'react';
import featureImg from '../../images/man-vs-wild.jpg';

const Program = (props) => {
	/* 
		- Props is an object passed from parent components
		- Props are readonly
	*/
	console.log(props);
	
	//Event Handler 
	// onClick, onMouseDown etc - synthetic events
	const watchItClickHandler = ($event) => { // $event - synthetic event object
		console.log($event.target);
		alert('clicked -- open console to see event object');
	}
  return(
    <div className="card" style={{marginBottom: '15px'}} >
	  <div className="card-header">
		{props.title} 
		<span className="badge badge-warning float-right">
			{props.category}
		</span>
	  </div>
	  <div className="card-body">
		<div className="media">
			<img width="110" height="110" alt="Man vs Wild" src={featureImg} className="mr-3" />
			<div className="media-body">
				<h5 className="mt-0">{props.name}</h5>
				<p>{props.children}</p>
				<button type="button" className="btn btn-primary" onClick={watchItClickHandler}>Watch it</button>
			</div>
		</div>
	  </div>
	  <div className="card-footer text-muted">
		{props.time} 
	  </div>
	</div>
  )
}

export default Program;
