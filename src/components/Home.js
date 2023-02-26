import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function Home() {
    const location = useLocation()
    
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Hello {location.state.id}</h1>
      <br/>
      <Link style={{marginLeft: "48%"}} className='link-login' to="/signup">Go Back</Link>
    </div>
  )
}
