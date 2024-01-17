import React, { useEffect, useRef } from "react";
import { staggerLetterAnimation } from "./mainPageSection";
import gsap from "gsap";
import ScrollTrigger from "scrolltrigger";
// import scrollTrigger

let selected  = "Selected";
let projects  = "Projects";
let tenure    = "(2015 - Today)";

gsap.registerPlugin(ScrollTrigger);

const triggerAnimation = (spans,delay)=>{
    let triggers = new ScrollTrigger(window,'y') 
    triggers.add({
        threshold: ()=>{
            return 700;
        },

        callback: ()=>{
            staggerLetterAnimation(spans,delay);
        },
  
    })
}


function Work(){
    const workconatiner = useRef();
    let spans;
    console.log("before rendered : " , spans);
    useEffect(()=>{
        spans = workconatiner.current.querySelectorAll("div span");
        console.log("after renderering " , spans);
        // staggerLetterAnimation(spans);
        triggerAnimation(spans,0)

    })
    return(
        <div ref={workconatiner} className="work-section">
            <div className="work-heading1">
                <p>
                {selected.split('').map((character, index)=>{
                    return <span key={index}>{character}</span>
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
            <div className="work-heading3">
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