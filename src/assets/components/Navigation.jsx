import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="flex justify-center mt-4 space-x-8 text-lg">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-blue-500' : 'text-blue-500'
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-blue-500' : 'text-blue-500'
        }
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-blue-500' : 'text-blue-500'
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) =>
          isActive ? 'font-bold underline text-blue-500' : 'text-blue-500'
        }
      >
        Resume
      </NavLink>
    </nav>
  )
}
