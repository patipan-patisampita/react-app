import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger stickey-top">
            <div className="container">
                <Link className="navbar-brand" to="/">ITtrat</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">เกี่ยวกับเรา</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">ติดต่อเรา</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/profile">ประวัติ</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Link
                            </Link>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="https://www.trattc.ac.th/">วท.ตราด</a></li>
                                <li><a className="dropdown-item" href="https://www.vec.go.th/">อาชีวศึกษา</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="https://www.moe.go.th/">กระทรวงศึกษาธิการ</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
