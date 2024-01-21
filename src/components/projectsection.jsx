import React from "react";
import { ProjectCard } from "./projectCard";



let data = [{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-1-2',
    styles      : {
        backgroundColor: "#3F3B37"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-3-2',
    styles      : {
        backgroundColor: "#E7AA2C"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-1-3',
    styles      : {
        backgroundColor: "#DB4C44"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-4-2',
    styles      : {
        backgroundColor: "#FBEFDF"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-1-2',
    styles      : {
        backgroundColor: "#FBEFDF"
    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-3-3',
    styles      : {
        backgroundColor: "#E7AA2C"

    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-2-2',
    styles      : {
        backgroundColor: "#DB4C44"

    }
},
{
    companyName : "Danka",
    year        : "2022",
    website     : "Sabe s Mension",
    counter     : 1,
    classes     : 'span-col-4-2',
    styles      : {
        backgroundColor: "#3F3B37"

    }
},


]
// let data1 = {
//     companyName : "Danka",
//     year        : "2022",
//     website     : "Sabe s Mension",
//     counter     : 1,
//     classes     : 'span-4',
// }

function ProjectSection(){
    return(
        <>
        <div className="project-section">
            {data.map((prCard, index)=>{
                return <ProjectCard key={index} data={prCard}/>
            })}
            {/* <ProjectCard data={data}/> */}
        </div>
        </>
    )
}
export default ProjectSection;