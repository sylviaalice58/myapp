import { useState } from "react"

const Sixthcomponent = () =>{
    const [weight,setWeight] = useState(50 );
    const[message,setMessage] = useState("The current weight is : ");

    return(
        <div className="Sixthcomponent">
            <h1>This is my sixthcomponent</h1>
            <h2>{message} {weight}</h2>

            <button onClick={() =>[setWeight(60),setMessage("The new weight is: ")]}>Click the button to update weight</button>
        </div>
    )
}
export default Sixthcomponent;