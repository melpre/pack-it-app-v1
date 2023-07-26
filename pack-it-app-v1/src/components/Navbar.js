import React from 'react';

function Navbar() {
    return (
        <div className="container-fluid">
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand px-3" href="/">
                    The PackIt App
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">
                        Home
                        {/* <span className="sr-only">(current)</span> */}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                        About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/listresults">
                        Checklist
                        </a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        href="/"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        Dropdown link
                        </a>
                        <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <a className="dropdown-item" href="/">
                            Action
                        </a>
                        <a className="dropdown-item" href="/">
                            Another action
                        </a>
                        <a className="dropdown-item" href="/">
                            Something else here
                        </a>
                        </div>
                    </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;