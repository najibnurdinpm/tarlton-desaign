import React from "react";
import CompNav from "../component/NavbarComp";
import MapContact from "../../src/img/contact/map-contact.png"
import { Link } from "react-router-dom";

class ContactComp extends React.Component {

        render() {    
        return  <div>
            <div className="mb-[75px] lg:mb-[111px]">
                <CompNav />
            </div>
            <section className="bg-[#59B3E1] py-[60px]">
                <div className="container px-[10%] mx-auto max-w-[1420px]">

                        <div className="">
                            <div className="text-center mb-[20px]">
                                <h1 className="text-[#1F427F] font-[600] text-[40px] leading-[54px] text-ceter">
                                    Talk to the Team
                                </h1>
                            </div>
                            <div className="mb-[47px] max-w-[845px] ml-auto">
                                <p className="">To learn more or connect directly to someone on the Team Tarlton team, email <span className="text-[#1F427F] font-[700] text-[18px]"> info@teamtarlton.com</span></p>
                            </div>
                            <div>
                                <div class="flex flex-col">
                                    <div>
                                        <div className="mb-[47px]">
                                            <div>
                                                <h4 className=" font-[600] text-[20px] leading-[30px]">
                                                Mailing Address
                                                1530 
                                                </h4>
                                            </div>
                                            <div>
                                                <p className="font-[400] text-[18px]">O’Brien Drive Suite C, 
                                                Menlo Park, CA 94025</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div>
                                                <h4 className=" font-[600] text-[20px] leading-[30px]">
                                                Press & Media Inquiries
                                                </h4>
                                            </div>
                                            <div>
                                                <p className="font-[400] text-[18px]">
                                                    To connect with PR at Team Tarlton, email us at     
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-[#1F427F] font-[700] text-[18px]">
                                                    info@teamtarlton.com
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div>

                        </div>

                </div>
            </section>
            <section className="bg-[#F4EEE9] py-[60px]">
                <div className="container px-[10%] mx-auto">
                    <div className="mb-[125px]">
                        <div class="flex flex-col">
                            <div>
                                <div className="mb-[47px]">
                                    <div className="mb-[10px]">
                                        <h1 className="text-[#1F427F] font-[600] text-[40px] leading-[54px] text-ceter">
                                        Join The Team
                                        </h1>
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px]">Get connected with the Team Tarlton community and be the first to hear about the latest news and events.</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <form action="">
                                    <div className="mb-[61px]">

                                        <div className="flex flex-col mb-[10px]">
                                            <div className="mb-[10px]">
                                                <input className="w-full p-2 border-[1px] border-[#1F427F] mx-auto bg-[#F4EEE9] placeholder-[#1F427F] border" type="text" placeholder="First Name" />
                                            </div>
                                            <div>
                                                <input className="w-full p-2 border-[1px] border-[#1F427F] bg-[#F4EEE9] placeholder-[#1F427F] " type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="mb-[10px]">
                                                <input className="p-2 w-full border-[1px] border-[#1F427F] bg-[#F4EEE9] placeholder-[#1F427F]" type="text" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                       <button className="bg-[#B31137] text-white px-[24px] pt-[6px] pb-[8px]" type="submit">Sign Up</button>
                                    </div>
                                </form> 
                            </div>

                        </div>
                    </div>
                    <div className="">
                        <img className="h-[215px]" src={MapContact} alt="" />
                    </div>
                </div>
            </section>
        </div>
                
    }
}

export default ContactComp;