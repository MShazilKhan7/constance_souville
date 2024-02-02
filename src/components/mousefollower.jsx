import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function CursorFollower() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    window.addEventListener('mousemove', (e) => {
      const { target, x, y } = e; // destructuring
      const t = gsap.timeline()
      t.to(cursor, {
        x:x,
        y:y,
      });
      t.to(cursor, {
        // x:x-rect.x,
        // y:y,
        opacity: 1,
        duration:0.01,
        ease: 'expo',
        scale: 14
      });

      return(
        // gsap.to(cursor, {
        //   // x:x-rect.x,
        //   // y:y,
        //   opacity: 0,
        //   duration:0.01,
        //   ease: 'expo',
        //   scale: 0
        // })
        console.log("component unmounting")
       
      )
    });

    
  }, []);
  return (
    <div ref={cursorRef} className='mouse-follower'></div>
  );
}