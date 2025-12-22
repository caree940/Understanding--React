const User = ({name}) => {
    return (
        <div className="user-card">
            <h1>{name}</h1>
            <h2>Location: Ghana</h2>
            <h3>Contact: geanthony94@gmail.com</h3>
        </div>
    );
};

export default User;