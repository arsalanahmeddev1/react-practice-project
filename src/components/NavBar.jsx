import { NavLinks } from '../constants'
const NavBar = () => {
  return (
    <nav className={`flex justify-between items-center`}>
      <h1>logo</h1>
      <ul className={`flex gap-[20px]`}>
       {
        NavLinks.map((navLink => {
          return (
            <li key={navLink.id}>
              <a href="">{navLink.title}</a>
            </li>
          )
        }))
       }
      </ul>
    </nav>
  )
}

export default NavBar