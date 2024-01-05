import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className='logo'> Log</h1>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="search-bar">
        <input type="text" className='search-box' placeholder='Search..' />
        <button className='search-btn'>Search</button>
      </div>
    </div>
  )
}

export default Navbar
