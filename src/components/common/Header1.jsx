import React from 'react'
import { Link } from 'react-router'
export default function Header1() {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-container">

                    <a href="https://flowbite.com/" className="logo">
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="logo-img"
                            alt="Flowbite Logo"
                        />

                        <span className="logo-text">
                            Flowbite
                        </span>
                    </a>

                    <button
                        type="button"
                        className="menu-button"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>

                        <svg
                            className="menu-icon"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M5 7h14M5 12h14M5 17h14"
                            />
                        </svg>
                    </button>

                    <div className="navbar-menu" id="navbar-default">
                        <ul className="nav-list">

                            <li>
                                <Link to={"/"} className="nav-link active">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to={"/about"} className="nav-link">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link to={"/product"} className="nav-link">
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link to={"/proApi"} className="nav-link">
                                    ProApi
                                </Link>
                            </li>
                            <li>
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>


                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
