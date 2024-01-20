import React from "react";
import { ProjectCard } from "./projectCard";

let data = {
    companyName : "Danka",
    year        : "2021",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'col-6'
}
let data1 = {
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'col-3'
}

function ProjectSection(){
    return(
        <>
        <div className="project-section">
            <ProjectCard data={data}/>
            <ProjectCard data={data1}/>
            {/* <ProjectCard /> */}
        </div>
        </>
    )
}
export default ProjectSection;