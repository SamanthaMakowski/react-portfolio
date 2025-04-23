import Navigation from './Navigation'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="p-4 border-b text-center">
      <h1 className="text-4xl font-bold mb-2">
        <Link to="/">Samantha Makowski</Link>
      </h1>
      <Navigation />
    </header>
  )
}
