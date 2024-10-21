import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container-xl">
                    <a class="navbar-brand" href="#">Ticketx</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-control="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Your Tickets</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">Theatres</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                          </li>
                        </ul>
                      </div>
                </div>
            </nav>
    </div>
  )
}

export default Navbar