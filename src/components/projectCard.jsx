import React, { Children, useEffect, useRef } from "react";
import gsap from "gsap";


export function ProjectCard({data}) {
    let classes = 'pr-card ' + `${data.classes}` + ' position-relative';
    const textRef = useRef(null);
    const card = useRef(null);
    const bottomSectionRef = useRef(null);
    let {website} = data
    website = website ? website.split("") : [];
  
    useEffect(() => {
      card.current.addEventListener("mouseenter", ()=>{
        slideText(textRef.current, bottomSectionRef.current, card.current)
      })
    

    }, []);
  
    return(
        <>  
            <div ref={card} style={data.styles} className={classes}>
                <div className="top-section d-flex justify-content-between">
                    <p>{data.companyName}</p>
                    <p>{data.year}</p>
                </div>
                
                <div ref={bottomSectionRef} className="bottom-section d-flex justify-content-between">
                  <div>
                    <p>{data.website}</p>
                    <p>{data.counter}</p>
                  </div>
                </div>

                <div ref={textRef} className="pr-hidden-text">
                    <div>
                        {website.map((c,index)=>{
                          return <div key={index}>{c}</div>
                        })}
                    </div>
                    <div>
                        {website.map((c,index)=>{
                          return <div key={index}>{c}</div>
                        })}
                    </div>
                </div>
            </div>
        </>
    )

}



const reverseAnimate = (textcontainer,bottomSect)=>{
  console.log("reverse Animation :  ", textcontainer);
    const t  = gsap.timeline()
    t.to(textcontainer.children, {
      y: "100%",
      duration: 1,
  })
    const height = (-1)*parseInt(window.getComputedStyle(bottomSect.    firstChild).getPropertyValue('height'))
    console.log("height is: ", height);
    t.fromTo(bottomSect.children,{y: (-1)*height},{
      y: 0,
      duration: 1,
      ease: "linear"
    })
}

const slideText  = (textRef,bottomSec,card)=>{
  // slide the bottom section downward
  const t  = gsap.timeline()
  const height = parseInt(window.getComputedStyle(bottomSec.    firstChild).getPropertyValue('height'))

  const bottomAnime = t.fromTo(bottomSec.children,{y:0},{
    y: height,
    duration: 3,
    ease: "expo.inOut"
  })

  const slideUp = t.to(textRef.children, {
      y: "-100%",
      duration: .9,
      ease: "sine",
    })
    
    const mytext   = textRef.firstChild.cloneNode(true);
    if(!mytext){
      return;
    }

    textRef.append(mytext)
    const width = -1 * parseInt(window.getComputedStyle(textRef.firstChild).getPropertyValue('width'));

    const slideLeft = t.to(textRef.children,{
      x: width,
      duration: 3,
      repeat: -1,
    })

    card.addEventListener("mouseleave", ()=>{
      slideLeft.paused(true)
      reverseAnimate(textRef,bottomSec)
    })

}
