      https://www.youtube.com/watch?v=VlSNiL_x4mo


##  project-useRef in React JS
* Why use useRef
* What is useRef
* Example useRef
* useRef with state and props
* Quiz


## case 2

       import React, { useState, useEffect, useRef } from 'react';

       const btnRef = useRef(0)
       useEffect(() => { 
         console.log(`hy I'm useeffect `)
         btnRef.current.style.backgroundColor = "red"
      },[])


      <span ref={btnRef}>Demo</span>
