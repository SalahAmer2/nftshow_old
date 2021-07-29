import React from 'react'
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container">
                    <Link className="navbar-brand" to="#x"><img src={logo} alt="image not found" /></Link>

                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-nav-center" aria-controls="navbar-toggle-nav-center" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar top-bar"></span>
                        <span className="icon-bar middle-bar"></span>
                        <span className="icon-bar bottom-bar"></span>
                        <span className="sr-only">Toggle navigation</span>
                    </button> {/* navbar-toggler */}

                    <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Current Drop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/past_drops">Past Drops</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#x">Consign</Link>
                            </li>
                        </ul>{/* navbar-nav */}

                        <ul className="navbar-button p-0 m-0">
                            <li className="nav-item">
                                <a href="#x" className="btn btn-sm btn-primary nav-button" data-toggle="modal" data-target=".login-modal"><i className="fas fa-wallet mr-10"></i><span>Connect Wallet</span></a>
                            </li>
                        </ul>
                    </div>{/* navbar-collapse */}
                </div>{/* navbar-container */}
        </nav>
        </div>
    )
}

export default Navbar
