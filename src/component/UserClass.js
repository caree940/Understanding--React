//class based component which is the older way to write react


import React from "react"
class UserClass extends React.Component {
// Here is how to receive props from the parent component in a class based component
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div className="user-card">
            <h1>{this.props.name}</h1>
            <h2>{this.props.location}</h2>
            <h3>Contact: geanthony94@gmail.com</h3>
        </div>
    );
    }
}

export default UserClass;