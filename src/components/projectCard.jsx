import React from "react";



export function ProjectCard({data}) {
    let classes = 'pr-card ' + `${data.classes}` + ' position-relative bg-light';
    console.log(classes)
    return(
        <>  
            <div className={classes}>
                <div className="top-section d-flex justify-content-between">
                    <p>{data.companyName}</p>
                    <p>{data.year}</p>
                </div>
                
                <div className="bottom-section d-flex justify-content-between">
                    <p>{data.website}</p>
                    <p>{data.counter}</p>
                </div>
            </div>
        </>
    )

}