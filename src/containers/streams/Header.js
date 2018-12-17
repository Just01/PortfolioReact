import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Home
      </Link>
      <div className="right menu">
        <Link to="/streams/new" className="item">
          Create New
        </Link>
      </div>
    </div>
  )
}

export { Header }