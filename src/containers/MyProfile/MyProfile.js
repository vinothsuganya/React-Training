import React, { Component } from 'react';

class MyProfile extends Component{
  constructor(props){
	console.log('--- 1. Inside Constructor of My Profile ----');
    super(props);
    this.state = {
      userName: "Vinoth",
      accountCreated: '4/May/2018'
    }
  }
  
  static getDerivedStateFromState(props, state) {
	  console.log('--- 3. Inside getDerivedStateFromState My Profile ----');
	  return state;
  }
  
  inputChangeHandler = ($event) => {
	  console.log($event.target.value);
	  this.setState({
		  userName: $event.target.value
	  });
  }
  
  componentDidMount() {
	  console.log('--- 4. Inside componentDidMount My Profile ----');
	  // ideal for you send ajax calls
	  // get the resp rest api -- json
	  // patch it up with existing state
	  // dont so setstate -- it will render and crash ur app
  }

  render(){
	  console.log('--- 3. Inside render My Profile ----');
    return(
      <div>
        <h2>Update Profile | Two Way Binding Example</h2>
        { /* the following input field without 
          onChange will show error in console 
        and it will be immutable */ }
        <input type='text' value={this.state.userName} onChange={this.inputChangeHandler} />
        <p>Username: {this.state.userName} </p>
        <span>
          Account Created On: {this.state.accountCreated}
        </span>
      </div> 
    )
  }
}

export default MyProfile;