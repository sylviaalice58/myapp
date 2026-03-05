import { useState } from "react";

const Fifthcomponent = () =>{
    // The useState() hook enables us to create dynamic website whereby it usally has the start / initial state followed by state that get shown when some effects happen on our website

    const [number,setNumber] =useState(10);


    return(
        <div className="Fifthcompone">
            {/* Below we bind our value for number */}
            <h1>Welcome to my fifthcomponent</h1>
            <h2>Current number is: {number}</h2>

            {/* Call the SetNumber function to update the number after a click effect */}
            <button onClick={ ()=> setNumber(20)}>Click to update the number</button>
        </div>
    )
}
export default Fifthcomponent;

// create a Sixthcomponent.jsx.Inside of it have the useState hook with the inistial value of weight being 50 kg have a button to update the weight when the button is clicked then render the component on app.js

// Research on routing in Reactjs.