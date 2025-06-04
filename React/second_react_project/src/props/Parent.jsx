//top level component

import Child from "./Child";

//which shares data with child
const Parent=() => {
    return (
        <>
        <h1>Parent</h1>
        <Child name="Raj"/>
        </>
    )

}
export default Parent;