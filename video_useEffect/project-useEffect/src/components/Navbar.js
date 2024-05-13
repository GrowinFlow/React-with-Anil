import React, {useEffect} from 'react'
import Footer from './Footer'

const Navbar = ({color}) => {
  useEffect(() => {
    alert("Color was changed "+ color)
  }, [color])
  
    
useEffect(() => {

  return () => {
    alert("Navbar removed | Component unmounted")
  }
}, [])

  return (
    <div>
      <h1>I'm  nvbar of color {color} here</h1>
      

      <Footer />
    </div>
  )
}

export default Navbar