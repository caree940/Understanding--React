import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         //The User name={"Chidera (Functional component)"} this how to pass in props to functional component
//         //The UserClass name={"Chidera (Class component)"} this is how to pass in props to class based component
//         <div>
//             <h1>About</h1>
//             <p>The Understanding React better About page</p>
//             <UserClass name={"Chidera (Class component)"} location={"Accra Ghana"} contact={"geanthony94@gmail.com"}/>
//         </div>
//     );
// };

// export default About;

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Parent Component constructor")
    }

    componentDidMount(){
        //console.log("Parent Component Did mount")
    }

    render(){
        //console.log("Parent render")
        return(
             <div>
            <h1>About</h1>
            <p>The Understanding React better About page</p>
            <UserClass name={"Chidera (Class component)"} location={"Accra Ghana"} contact={"geanthony94@gmail.com"}/>
        </div>
        )
    }
}

export default About;