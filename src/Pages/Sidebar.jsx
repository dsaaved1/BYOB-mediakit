import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

function Sidebar() {

    return (
        <>
            <>   
                    <div className="sidebar">
                        <div className="close-toggle">
                            <i className="fa-solid fa-xmark" />
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/" className="">
                                    <img
                                        src="/assets/images/dashboard.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="/assets/images/Profile.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <NavLink to="/leaderboard">
                                    <img
                                        src="/assets/images/Leaderboard.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Leaderboard
                                </NavLink>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="/assets/images/Orders.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Orders
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="/assets/images/Messages.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Messages
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="/assets/images/Setting.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <img
                                        src="/assets/images/Signout.svg"
                                        alt="icon"
                                        className="img-fluid"
                                    />{" "}
                                    Signout
                                </Link>
                            </li>
                        </ul>
                    </div>
               
            </>

        </>
    )
}

export default Sidebar