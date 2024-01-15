import React from "react";


let selected  = "Selected";
let projects  = "Projects";
let tenure    = "(2015 - Today)";


function Work(){
    return(
        <div className="work-section">
            <div className="work-heading1">
                <p>
                {selected.split('').map((character, index)=>{
                    return (<span key={index}>{character}</span>)
                })}
                </p>
            </div>
            <div className="work-heading2">
                <p>
                {projects.split('').map((character, index)=>{
                   return <span key={index}>{character}</span>
                })}
                </p>
            </div>
            <div  className="work-heading3">
                <p>
                {tenure.split('').map((character, index)=>{
                    return (<span key={index}>{character}</span>)
                })}  
                </p>
            </div>
        </div>
    )
}

export default Work;