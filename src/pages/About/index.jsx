import UserClass from "../../components/UserClass";
// import User from "../../components/User";
import React from "react";

class index extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent component did mount called");
  }
  render(){
    console.log("Parent render");
    return(
      <div>
        <h1>About this site</h1>
        <h2>Userclass is a class based component</h2>
        <UserClass name={"classy components"} location={"Santpura Modinagar"} contact={"abcd@gmail.com"} />
      </div>
    )
  }
}


export default index;