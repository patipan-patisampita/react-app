import React from 'react';
import { Link } from 'react-router-dom'
import Service1 from '../../images/service1.jpg';
import Service2 from '../../images/service2.jpg';
import Service3 from '../../images/service3.jpg';

function Service() {
    return (
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading">บริการชุมชน</h3>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service1} className="w-100 border-bottom" alt="Service1" />
                           <div className="card-body">
                                <h4>Web Hosting</h4>
                                <div className="underline"></div>
                                <p>
                                บริการ Web Hosting ด้วยทีมงานมืออาชีพพร้อมให้บริการตลอด 24 ชั่วโมง ใน Data Center ระดับ Tier 4 
                                พร้อมด้วยมาตรฐาน ISO20000, ISO27001 และ ISO9001 ถ้าคุณกำลังมองหาเว็บโฮสติ้งดีๆ อยู่ ก็ที่นี่แหละ 
                                รับประกันความพึงพอใจยินดีคืนเงินเต็มจำนวนโดยไม่ต้องแจ้งเหตุผล
                                </p>
                                <Link to="/services" className="btn btn-link">read more</Link>
                           </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service2} className="w-100 border-bottom" alt="Service2" />
                           <div className="card-body">
                                <h4>Cloud Server</h4>
                                <div className="underline"></div>
                                <p>
                                    บริการ Cloud Server สำหรับ Web หรือ Application ที่ต้องการประสิทธิภาพ 
                                    และความเสถียรภาพสูงสุด อิสระในการใช้งาน สามารถเลือกและติดตั้ง OS ได้เอง
                                    องรับการใช้งานที่หลากหลายไม่ว่าจะเป็น Web Server, Mail Server, App Server, Database Server                                 </p>
                                <Link to="/services" className="btn btn-link">read more</Link>
                           </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card shadow">
                            <img src={Service3} className="w-100 border-bottom" alt="Service3" />
                           <div className="card-body">
                                <h4>Domain Registration</h4>
                                <div className="underline"></div>
                                <p>
                                    เราให้คุณจัดการทุกอย่างได้เองผ่าน Control Panel มีระบบป้องกันการจารกรรมโดเมน 
                                    พร้อมบริการให้คุณตลอด 24 ชม. ไม่มีวันหยุด โดเมนที่จดทะเบียนกับเราเป็นของคุณ 100% 
                                    ไม่มีการถือครองแทนโดยผู้ให้บริการแบบที่อื่น
                                </p>
                                <Link to="/services" className="btn btn-link">read more</Link>
                           </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
export default Service
