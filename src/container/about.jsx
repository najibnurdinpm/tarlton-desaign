import React from "react";
import CompNav from "../component/NavbarComp";
import AssetAbout from "../../src/img/about/asset-about.png";
import EllipsAb from "../../src/img/about/asset-about.png";
import HomeIcon from "../../src/img/about/home-icon.png";
import TopIcon from "../../src/img/about/top-icon.png";
import PencilIcon from "../../src/img/about/pencil-icon.png";
import Layer from "../../src/img/about/layer-2.png";
import Peopleicon from "../../src/img/about/people-icon.png";
import JhonTarlton from "../../src/img/about/jhon-tarlton.png";
import FourLineAbout from "../../src/img/about/four-line-about.png";
import MapAbout from "../../src/img/about/map-about.png";

class aboutComp extends React.Component {
    render() {
        return  <div>
            <div className="lg:mb-[111px]">
                <CompNav />
            </div>
            <section className="bg-[#59B3E1] py-[112px] relative">
                <div className="container mx-auto px-[10%]">
                    <div className="grid grid-col-1">
                        <div className="mb-[189px]">
                            <div className="mb-[39px]">
                                <h3 className="text-[#202C5B] font-[600] text-[44px] leading-[54px]">Our Purpose</h3>
                            </div>
                            <div>
                                <p className="text-[#000000] font-[400] text-[18px] leading-[28px]">The Tarlton Foundation is dedicated to strengthening communities by supporting healthcare innovation and opening up pathways to opportunities in our local neighborhoods.</p>
                            </div>
                        </div>
                        <div>
                            <div className="absolute max-w-[479px] w-[90%] bottom-0 left-0">
                                <div className="relative">
                                    <div className="absolute w-[106px] h-[106px] right-[-50px] top-28 ">
                                        <img src={EllipsAb} className="opacity-[0.85]" alt="" />
                                    </div>
                                </div>
                                <img src={AssetAbout} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F4EEE9] py-[60px]">
                <div className="container mx-auto px-[10%]">
                    <div className="max-w-[651px] mb-[40px]">
                        <h2 className="text-[#1F427F] text-center font-[600] text-[40px] leading-[50px]">Vision</h2>
                    </div>
                    <div>
                        <div className="flex flex-col">
                            <div className="mb-[20px]">
                                <p>
                                Our whole community (including our network of companies, investors, vendors, partners, neighbors, and citizens) moves forward collaboratively in activating and realizing astounding results.
                                </p>
                            </div>
                            <div className="mb-[20px]">
                                <p>
                                Through new multidisciplinary research and innovation, all cancers have become curable or manageable diseases for both patients and their loved ones.
                                </p>
                            </div>
                            <div className="mb-[20px]">
                                <p>
                                Students from our neighborhood schools are supported in their academic pursuits, leading to fruitful, lifelong careers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F8C657] py-[60px]">
                <div className="container mx-auto px-[10%]">
                    <div className="mb-[40px]">
                        <div className="flex flex-col">
                            <div className="mb-[15px] relative">
                                <div className="absolute top-1 left-1">
                                    <img src={TopIcon} alt="" />
                                </div>
                                <img src={HomeIcon} alt="" />
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div className="mb-[15px]">
                                        <p className="font-[600] text-[35px] leading-[45px text-[#1F427F]">Fostering Education</p> 
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[30px] text-[#313333]">As a resident and active corporate citizen in the communities in which we operate, we partner with local schools and nonprofits to inspire and support the next generation of scientists and our future colleagues in the life sciences community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div className="mb-[40px]">
                        <div className="flex flex-col">
                            <div className="mb-[15px]">
                                <img src={PencilIcon} alt="" />
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div className="mb-[15px]">
                                        <p className="font-[600] text-[35px] leading-[45px text-[#1F427F]">Education</p> 
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[30px] text-[#313333]">Because education is in the Tarlton DNA, learning is at the heart of everything we do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[40px]">
                        <div className="flex flex-col">
                            <div className="mb-[15px]">
                                <img src={Layer} alt="" />
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div className="mb-[15px]">
                                        <p className="font-[600] text-[35px] leading-[45px text-[#1F427F]">The Long View</p> 
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[30px] text-[#313333]">With our heritage in real estate development and investment, the Tarlton Foundation will always have a multi-generational mindset when we think about desired outcomes.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-[40px]">
                        <div className="flex flex-col">
                            <div className="mb-[15px]">
                                <img src={Peopleicon} alt="" />
                            </div>
                            <div>
                                <div className="flex flex-col">
                                    <div className="mb-[15px]">
                                        <p className="font-[600] text-[35px] leading-[45px text-[#1F427F]">Giving Back</p> 
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[30px] text-[#313333]">The Tarlton Foundation’s contribution goes beyond writing a check. We pride ourselves on our level of employee and tenant participation in volunteering and giving back to the community.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </section>
            <section className="bg-[#F4EEE9] py-[60px]" >
                <div className="container mx-auto px-[10%]">
                    <div className="mb-[40px]">
                        <h2 className="text-[#DB672C] text-center font-[600] text-[40px] leading-[50px]">
                            Our Board of Directors
                        </h2>
                    </div>
                <div>
                        

                <div className="grid grid-cols-1">
                        <div className="mb-[20px]">
                            <div className="mb-[18px]">
                                <img src={JhonTarlton} alt="" />
                            </div>
                            <div className="mb-[18px]">
                                <h3 className="text-[#313333] font-[600] text-[35px] leading-[45px]">John Tarlton</h3>
                            </div>
                            <div>
                                <a href="" className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2">Read more</a>
                            </div>
                        </div>

                        <div className="mb-[20px]">
                            <div className="mb-[18px]">
                                <img src={JhonTarlton} alt="" />
                            </div>
                            <div className="mb-[18px]">
                                <h3 className="text-[#313333] font-[600] text-[35px] leading-[45px]">John Tarlton</h3>
                            </div>
                            <div>
                                <a href="" className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2">Read more</a>
                            </div>
                        </div>

                        <div>
                            <div className="mb-[18px]">
                                <img src={JhonTarlton} alt="" />
                            </div>
                            <div className="mb-[18px]">
                                <h3 className="text-[#313333] font-[600] text-[35px] leading-[45px]">John Tarlton</h3>
                            </div>
                            <div>
                                <a href="" className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2">Read more</a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-1">
                    <div className="bg-[#59B3E1] py-[50px]">
                        <div className="container px-[10%] mx-auto">
                            <div className="mb-[62px]">
                                <img src={FourLineAbout} alt="" />
                            </div>
                            <div className="mb-[30px]">
                                <h2 className="text-[#1F427F] font-[600] text-[40px] leading-[58px]">Our Community</h2>
                            </div>
                            <div className="mb-[66px]">
                                <p className="text-[18px] leading-[28px] text-[##313333]">The Tarlton Foundation and Tarlton Properties operate in several thriving communities in the Bay Area, including Menlo Park, Palo Altos, San Mateo, Hayward, Union City and more. </p>
                            </div>
                            <div>
                                <img src={FourLineAbout} alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={MapAbout} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}
export default aboutComp;