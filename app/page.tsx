"use client"
import Footer from '../app/Pages/Footer/index';
import {Home} from "../app/Pages/Home";
import Navbar from "@/app/Navbar";

export default function Page() {
    return (
        <div>
            <div className="home_page">
                <img src="/bg.svg" alt=""/>
                <Home/>
                <Navbar/>
                <div className="main">
                    <div className="main_block">
                        <div className="block_item">
                            <h1>Brief Description
                            </h1>
                            <p>Adaptive helps organizations quickly and efficiently onboard new employees,
                                align teams, and boost collaboration by matching their skills with the right
                                projects. Our powerful tools ensure the right team engagement and pairing the
                                right experts with the right projects.</p>
                        </div>
                        <div className="block_item">
                            <h1>
                                About Us
                            </h1>
                            <p>All new employees and teams require a tailored approach: Adaptive brings
                                teams together to improve work efficiency and harmony. By using our intuitive
                                tools, you can quickly streamline the onboarding process and foster
                                organizational growth.</p>
                        </div>
                        <div className="block_item">
                            <h1>
                                Features or Benefits
                            </h1>
                            <p>
                                Flexibility and customization options
                                <br/>
                                Cost-effective solutions
                                <br/>
                                Secure and reliable technology
                                <br/>
                                Proven best practices</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
