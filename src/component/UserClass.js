//class based component which is the older way to write react


import React from "react"

class UserClass extends React.Component {
    // Here is how to receive props from the parent component in a class based component
    constructor(props) {
        super(props)

        // how to write useState in class based component
           this.state = {
           userInfo: {
        
           }
        };

        //console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount(){
        //console.log(this.props.name + "Child Component Mount")
        const data = await fetch("https://api.github.com/users/caree940");
        const json = await data.json();

        this.setState({
            userInfo: json
        })
        console.log(json);
    }

    render(){
        //console.log(this.props.name + "Child render")
        //this how we destructure props in class component
        const {name, location, contact, bio, avatar_url} = this.state.userInfo;
        //this how we destructure state in class component
        // const {count, count2} = this.state
        return(
            <div className="user-card">
                {/* <h1>Count:{count}</h1>
                <h5>Count: {count2}</h5> */}
                {/* <button onClick={() => {
                    //how is how to update the state count variable in our class based component
                    this.setState({
                      count: this.state.count + 1,
                      count2: this.state.count2 + 2
                    })
                }}>count increase</button> */}
                <img src={avatar_url}/>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h3>Bio: {bio}</h3>
        </div>
        )
    }
}

export default UserClass;