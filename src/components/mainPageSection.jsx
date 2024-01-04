import React, { useCallback, useState,useEffect } from "react";


let name = "Constance";
let lastname = "Souville";
let french = "French";
let frontend = "Frontend";
let developer = "Developer";


let leftInterval  =   0;
let rightInterval =   10;
let intervals = [20,40,50,60,70,80,90,100]
const getRandomIntegerBwRange  = (left,right) =>{
    console.log("L:",left)
    console.log("R:",right)
    let randomNumber  = Math.random();
    const randomInRange = randomNumber* (right - left+1)+left;
    const number = Math.floor(randomInRange)
    return number;
}

function MainPageSection(){
    const [value, setValue] = useState(0);
    let i = 0
    useEffect(() => {
        const loaderInterval = setInterval(() => {
            if(leftInterval==100){
                clearInterval(loaderInterval)
                rightInterval=100;
            }
            let loaderValue = getRandomIntegerBwRange(leftInterval, rightInterval);

            if (loaderValue > 98) {
                console.log("NOW  the Value is: ", loaderValue);
                loaderValue = 100;
            }

            
            // Update the state based on the previous state
            setValue((prevVal)=>loaderValue);
            
           
            // Update the range
            if (i < intervals.length) {
                leftInterval = rightInterval;
                rightInterval = intervals[++i];
            }
        }, 300);

        setTimeout(()=>{
            clearInterval(loaderInterval)
        }, 5000);
    }, []); 
   

return(
    
    <div className="main-container">
        <div className="firstHeadingContainer">
            <div className="left">
            {name.split('').map((character,index)=>{
                return <span key={index}>{character}</span>
            })}
            </div>
            <div className="right">
                {lastname.split('').map((character,index)=>{
                    return <span key={index}>{character}</span>
            })}
            </div>
        </div>
        <div className="secondHeadingContainer">
            <div className="center">
                {french.split('').map((character,index)=>{
                        return <span key={index}>{character}</span>
                })}
            </div>
            <div className="loader">
                <h1>{value}</h1>
            </div>
        </div>
        <div className="thirdHeadingContainer">
            <div className="left">
                    {frontend.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
            </div>
        </div>
        <div className="fourthHeadingContainer">
            <div className="right">
                    {developer.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
            </div>
        </div>
    </div>
)
}



export default MainPageSection;