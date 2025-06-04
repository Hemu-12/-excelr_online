import { useState } from "react";
import Phone from "./Phone2.png";
import watch from "./watch1.png";


const Example3 = () => {
    let[image,setImage]=useState(Phone);
    let change=()=>{
        setImage(watch);
    }
    return (
        <>
           <img src={image} alt="" width="200px" height="200px" />
           <br />
           <button onClick={change}>Click</button>
        </>
    )
};
export default Example3;