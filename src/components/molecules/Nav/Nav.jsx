import { NavLink } from "react-router-dom"
import './Nav.css'


export const Nav = () => {
  return (
    <nav className="navBar">
        <NavLink to={'/'}>HomePage</NavLink>
        <NavLink to={'/users'}>UsersPage</NavLink>
    </nav>
  )
}
