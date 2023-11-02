import React from "react";

function Child(props){
    return(
        <input 
        style={{"padding": "10px", "borderRadius": "5px"}}
        value={props.temperature}
        onChange={handleChange}
        />
    )
}



export default Child;