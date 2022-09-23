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
                <a
                  onClick={() => setCurrentPage("Home")}
                  href="#section0"
                  className="tabs"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="tabs"
                  href="#section2"
                  onClick={() => setCurrentPage("About")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="tabs"
                  href="#section3"
                  onClick={() => setCurrentPage("Liked")}
                >
                  Liked
                </a>
              </li>
              <li>
                <a
                  className="tabs"
                  href="#section4"
                  onClick={() => setCurrentPage("Stock")}
                >
                  Stock
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
