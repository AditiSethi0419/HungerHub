import React, { Component } from 'react';

export default class index extends Component {
    constructor(props){

        super(props);
        console.log("Child constructor");
        this.state={
            // this is a big object containing state of variables
            count: 0,
            
        };
      //  console.log(props);
    } // Whenever the instance of class is created a constructor is created and props are extracted from super class.Constructor is best place to receive props and create state variables

    componentDidMount(){
        console.log("Child component did mount");
    }
  render() {
    const {name , location , contact} = this.props;
    // const {count} = this.state; this can also be done to get count value
console.log("Child render")
    return (
        <div className='user-card'>
        <h1>Count:{this.state.count}</h1>
        <button onClick={()=>{
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({count: this.state.count +1})
        }}>Click to increase count value</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>

    </div>
    );
  }
}


// Meaning of creating instance of class : when loading a class baesd component on webpage and giving it some props . 
