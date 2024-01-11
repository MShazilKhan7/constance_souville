import React, { useCallback, useState,useEffect, useRef } from "react";
import Card from "./smallCard";
import gsap from "gsap";

let name = "Constance";
let lastname = "Souville";
let french = "French";
let frontend = "Frontend";
let developer = "Developer";
let based = "based";
let montreal = "in montreal";

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
    const loaderContainer   = useRef()
    const firstContainer    = useRef()
    let spans;
    let i=0
    useEffect(() => {
        // starts after the loader completes animating 
        animateLoader();

        setTimeout(()=>{
            console.log("starting");
            const loader = setInterval(() => {
                if(leftInterval==100){
                   rightInterval=100;
                   clearInterval(loader)
                   reverseLoader();
                   animateTopHeading();
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
            }, 150);
    
        },1000)
        // render honay ke baad values leingy span se
        spans = (firstContainer.current.querySelectorAll('div span'));

    }, []); 
   
    // 
    let t = gsap.timeline()
    const animateLoader = useCallback(()=>{
        t.to(loaderContainer.current,{
            y: "-100%",
            duration: 1,
        })   
    },[])
    const reverseLoader = useCallback(()=>{
        t.reverse()
     
    },[])

    const animateTopHeading = useCallback(()=>{
        console.log(spans)
        gsap.to(spans,{
            y: "-110px",
            duration: 0.8,
            delay: 1.5,
            stagger: 0.02,
            ease: "expo"
        })
    })


   

return(
    
    <div ref={firstContainer} className="main-container">
        <div  className="firstHeadingContainer">
            <div className="left">
                {name.split('').map((character,index)=>{
                    return <span key={index}>{character}</span>})
                }
            </div>
            <div className="right">
                {lastname.split('').map((character,index)=>{
                    return <span key={index}>{character}</span>
            })}
            </div>
        </div>

        <div className="secondHeadingContainer">

                {/* {<Card/>} */}
                <div className="center">
                    {french.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
                </div>
                {/* {<Card/>} */}
            <div ref={loaderContainer} className="loader">
                <div>
                <p>{value}</p>
                </div>
                <p className="percent">%</p>

            </div>
        </div>

        <div className="thirdHeadingContainer">
            <div className="left">
                    {frontend.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
            </div>
            <div className="right">
                    {developer.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
            </div>
        </div>

        <div className="fourthHeadingContainer">
            <div className="left">
                        {based.split('').map((character,index)=>{
                                return <span key={index}>{character}</span>
                        })}
            </div>
            <div className="right">
                    {montreal.split('').map((character,index)=>{
                            return <span key={index}>{character}</span>
                    })}
            </div>
        </div>
    </div>
)
}



export default MainPageSection;