import React from 'react'
import Button from './Button'
import Footer from './Footer'

const Navbar = ({count}) => {
  return (
    <div>
      <h1>I'm nvbar</h1>
      
      <Button count={count} />

      <Footer />
    </div>
  )
}

export default Navbar