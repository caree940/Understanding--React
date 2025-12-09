
import React from "react";
import ReactDOM from "react-dom/client";

// React Element using JSX
const JsxHeading = () => (
<h1 className="heading" tabIndex="5">
    So why you been no show before
    </h1>
    );

    //React Functional Component
    const FunctionComponent = () => (
        <div id="container">
            <div>{<JsxHeading />}</div>
            <h1 className="heading">Hello this is a valid functional component</h1>
        </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render( <FunctionComponent/> );