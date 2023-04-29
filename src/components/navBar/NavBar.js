import logo from "./yogakita.svg"
import "./navbar.scss"
import { Link, NavLink } from "react-router-dom"
import {  useState } from "react"
import ConModal from "../contact/ConModal"
// import openImg from './open-solid.svg'
// import closeImg from './close-solid.svg'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [nav, setNav] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link className="logo__link" to="/">
          <img className="logo__img" src={logo} alt="img" />
        </Link>
        <ul className={nav ? 'nav__items nav__active' : "nav__items"}>
          <li className="nav__item">
            <NavLink className="nav__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="about">
              About
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="service">
              Our Services
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink className="nav__link" to="pricing">
              Pricing
            </NavLink>
          </li>
          <li className="nav__item">
            <button onClick={() => setOpen(true)} className="nav__button">
              Contacts
            </button>
          </li>
        </ul>
        <div onClick={()=>setNav(!nav)} className="icon">
          {nav ? <AiOutlineClose size={50}/> : <AiOutlineMenu size={50} />}
        </div>
        <ConModal
          open={open}      
          setOpen={setOpen}
        />
      </nav>
    </>
  )
}

export default NavBar
