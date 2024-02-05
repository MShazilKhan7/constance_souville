import React from "react";
import { ProjectCard } from "./projectCard";


let socials  = [
    {
    companyName : "LinkedIn",
    year        : "Li",
    website     : "MShazilKhan",
    counter     : "Li",
    classes     : 'span-col-1-2',
    styles      : {
        // backgroundColor: "#FBEFDF"
    }
},
    {
    companyName : "Twitter",
    year        : "Tw",
    website     : "@MShazilKhan",
    counter     : "Tw",
    classes     : 'span-col-3-2',
    styles      : {
        // backgroundColor: "#FBEFDF"
    }
    },
    {
        companyName : "Email",
        year        : "Em",
        website     : "@MShazilKhan",
        counter     : "Tw",
        classes     : 'span-col-1-3',
        styles      : {
            // backgroundColor: "#FBEFDF"
        }
    },
]

export function Socials(){
    return(
        <div className="socials">
            <div className="content">
                  <p>I'm currently working at LG2 Montreal but I can still free up some time for side projects. <br></br> Feel free to contact me if you want to collaborate or have a little chat.</p>
            </div>
            <div className="project-section">
                {socials.map((social, index)=>{
                    return <ProjectCard key={index} data={social}/>
                })}
            </div>
        </div>
    )
}