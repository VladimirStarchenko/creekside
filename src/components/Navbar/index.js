function Navbar({ setCurrentPage }) {
  return (
    <>
      {/* <!-- Header and tabs  --> */}
      <header className="nav-bar-header">
        <img className="creekside-logo" src="/img/transparent.png" />
        <nav role="navigation">
          <div id="menuToggle">
            {/* <!-- Hamburger for mobile response --> */}
            <input className="checkbox-hidden" type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <a className="tabs" href="">
                  Home
                </a>
              </li>
              <li>
                <a className="tabs" href="">
                  About
                </a>
              </li>
              <li>
                <a className="tabs" href="">
                  Stock
                </a>
              </li>
              <li>
                <a className="tabs" href="">
                  Liked
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      ;
    </>
  );
}

export default Navbar;
