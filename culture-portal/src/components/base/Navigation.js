import React from "react"
import { Link } from "gatsby"

export default () => {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/" className="active-page">Home</Link>
        </li>
        <li>
          <Link to="/authors/">Authors</Link>
        </li>
        <li>
          <Link to="/team/">Team</Link>
        </li>
        <li>
          <Link to="/worklog/">Worklog</Link>
        </li>
        <li>
          <Link to="/styleguide/">Styleguide</Link>
        </li>
      </ul>
    </nav>
  )
}
