import React, { useState } from "react";

const State6 = ()=>{
    let [complete1,setComplete1] = useState(true);
    let [complete2,setComplete2] = useState(true);
    let [complete3,setComplete3] = useState(true);
    
    console.log("1 ",complete1)
    console.log("2 ",complete2)
    console.log("3 ",complete3)
    
    return (
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="child">
                <h3>Child Component</h3>
                {/* <ul>
                    <li>Lear React {complete1 && <button onClick={setComplete1(false)}>Complete</button>}</li>
                    <li>Build a React app {complete2 && <button onClick={setComplete2(false)}>Complete</button>}</li>
                    <li>Deploy the React app {complete3 && <button onClick={setComplete3(false)}>Complete</button>}</li>
                </ul> */}
                <ul>
                    <li>Lear React 
                        {
                            complete1 && <button onClick={()=>setComplete1(false)}>Complete</button>
                        }
                    </li>
                    <li>Build a React app  
                        {complete2 && 
                        <button onClick={()=>setComplete2(false)}>Complete</button>
                        }
                    </li>
                    <li>Deploy the React app
                        {
                            complete3 && 
                            <button onClick={()=>setComplete3(false)}>Complete</button>
                        }  
                            
                            </li>
                </ul>
            </div>
        </div>
    )
}


export default State6;
