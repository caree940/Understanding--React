import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return (
        //The User name={"Chidera (Functional component)"} this how to pass in props to functional component
        //The UserClass name={"Chidera (Class component)"} this is how to pass in props to class based component
        <div>
            <h1>About</h1>
            <p>The Understanding React better About page</p>
            <User name={"Chidera (Functional Component)"}/>
            <UserClass name={"Chidera (Class component)"} location={"Accra Ghana"}/>
        </div>
    );
};

export default About;