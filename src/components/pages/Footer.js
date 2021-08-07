import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3>Company Information</h3>
                        <hr />
                        <ul type="square">
                            <li>วิทยาลัยเทคนิคตราด</li>
                            <li>480 หมู่ 9 ถนนสุขุมวิท ต.วังกระแจะ อ.เมือง จ.ตราด</li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h3>Quick Link</h3>
                        <hr />
                        <ul type="square">
                            <li><div><Link to="/">Home</Link></div></li>
                            <li><div><Link to="/about">About</Link></div></li>
                            <li><div><Link to="/contact">Contact</Link></div></li>
                            <li><div><Link to="/profile">Profile</Link></div></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h3>Contact Information</h3>
                        <hr />
                        <ul type="square">
                            <li><div><p className="text-white mb-1"> 480 หมู่ 9 ถนนสุขุมวิท ต.วังกระแจะ อ.เมือง จ.ตราด 23000</p></div></li>
                            <li><div><p className="text-white mb-1"> trat.ac.th@gmail.com</p></div></li>
                            <li><div><p className="text-white mb-1"> 039-518-105</p></div></li>
                        </ul>
                    </div>

                </div>
                <hr />
                <div>Copyright &copy; 2020-2021 by Patipan | All rights reserved</div>
            </div>
        </section>
    );
}

export default Footer;
