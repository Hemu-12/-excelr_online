import React, { useContext } from 'react'
import { PropertyContext } from './PropertyContext';

//provider - GrandParentContext
//consumer - GrandChild

const GrandParentContext = () => {
    let property = "hyderabad";
  return (
    <>
        <div>ContextParent</div>
        <PropertyContext.Provider value={property}>
        < Parent />
        </PropertyContext.Provider>
    </>
    
  );
};
const Parent = () => {
  return (
    <>
        <div>Parent</div>
        < Child />
    </>
    
  );
};
const Child = () => {
  return (
    <>
        <div>Child</div>
        < GrandChild />
    </>
    
  );
};
const GrandChild = () => {
  let data = useContext(PropertyContext);
  return (
    <>
        <div>{data} from GrandChild</div>
        <div>GrandChild</div>
    </>
    
  );
};
export default GrandParentContext;