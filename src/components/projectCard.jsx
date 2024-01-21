import React from "react";



export function ProjectCard({data}) {
    let classes = 'pr-card ' + `${data.classes}` + ' position-relative';
    console.log(classes)
    return(
        <>  
            <div style={data.styles} className={classes}>
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