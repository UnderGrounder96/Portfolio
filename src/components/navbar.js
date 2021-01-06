import React from "react"
import { FaAlignRight } from "react-icons/fa"
import { Link } from "gatsby"

import logo from "../assets/logo.svg"
import PageLinks from "../constants/links"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} loading="lazy" alt="logo" />
          </Link>

          <button type="button" className="toggle-btn">
            <FaAlignRight />
          </button>
        </div>
        <PageLinks styleClass="nav-links" />
      </div>
    </nav>
  )
}

export default Navbar
