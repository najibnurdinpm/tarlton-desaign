import React from "react";
import CompNav from "../component/NavbarComp";

import { Link } from "react-router-dom";

import HeroInitiatives from "../../src/img/initiatives/hero-initiatives.jpg"
import ImgAdv1 from "../../src/img/initiatives/img-adv-1-body.png"
import ImgAdv2 from "../../src/img/initiatives/img-adv-2-body.png"

class InitComp extends React.Component {
    render() {
        return  <div>
             <div className="mb-[75px] lg:mb-[111px]">
                <CompNav />
            </div>
            <section className="bg-[#DB672C] py-[60px] relative">
                <div className="container mx-auto px-[10%]">
                    <div class="grid grid-cols-1">
                        <div className="mb-[260px]">
                            <div className="mb-[30px]">
                                <h1 className="text-[#F4EEE9] font-[600] text-[44px] leading-[54px]">Impacting Our Community</h1>
                            </div>
                            <div>
                                <p className="text-[#F4EEE9] font-[600] text-[18px] leading-[28px]">The Tarlton Foundation is dedicated to strengthening communities by supporting healthcare innovation and opening up pathways to opportunities in our local neighborhoods.</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 ">
                            <img className="w-[350px] h-[280px]" src={HeroInitiatives} alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F4EEE9] py-[60px] relative">
                <div className="container mx-auto px-[10%]">
                    <div className="grid grid-cols-1">
                        <div className="mb-[50px]">
                            {/* versi dekstop */}
                            {/* <div class="flex flex-nowrap">
                                <div className="mr-auto">02</div>
                                <div >03</div>
                            </div> */}
                            <div class="flex flex-col">
                                <div className="mr-auto mb-[100%]">
                                    <div className="w-[90%] h-[300px] absolute left-0 ">
                                        <img src={ImgAdv1} alt="" />
                                    </div>
                                </div>
                                <div className="mb-[30px]">
                                    <h3 className="text-[#B31137] font-[600] text-[35px] leading-[45px]">Advancing Cancer Research</h3>
                                </div>
                                <div className="mb-[10px]">
                                    <div className="mb-[30px]">
                                        <p className="font-[400] text-[18px] leading-[28px]">
                                        We contribute and raise new funds in support of cancer research and programs that support those living alongside cancer, that increase the velocity of discovery, and that significantly improve long-term cancer survival rates.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[28px]">
                                        Since launching in 2019, the Tarlton Foundation has raised close to $300,000 to benefit cancer research.
                                        </p>
                                    </div>
                                </div>
                                <div>

                                <Link className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2" to="/advcancer">Learn more</Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col">
                                <div className="mr-auto mb-[100%]">
                                    <div className="w-[90%] h-[300px] absolute right-0 ">
                                        <img src={ImgAdv2} alt="" />
                                    </div>
                                </div>
                                <div className="mb-[30px]">
                                    <h3 className="text-[#B31137] font-[600] text-[35px] leading-[45px]">Advancing Cancer Research</h3>
                                </div>
                                <div>
                                    <div className="mb-[30px]">
                                        <p className="font-[400] text-[18px] leading-[28px]">
                                        We contribute and raise new funds in support of cancer research and programs that support those living alongside cancer, that increase the velocity of discovery, and that significantly improve long-term cancer survival rates.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-[400] text-[18px] leading-[28px]">
                                        Since launching in 2019, the Tarlton Foundation has raised close to $300,000 to benefit cancer research.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <a className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2">
                                    Learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#F8C657] py-[60px]">
                <div className="container px-[10%] mx-auto">
                    <div className="mb-[28px]">
                        <h2 className="text-[#1F427F] font-[600] text-[40px] text-center">Make a donation</h2>
                    </div>
                    <div className="mb-[30px]">
                        <p className="text-[#313333] font-[400] text-[18px] leading-[28px]">
                        Financial contributions to Team Tarlton can be designated to our three focus areas and 100% of the donation received will go to the cause you have selected.
                        </p>
                    </div>
                    <div className="text-center">
                        <a href="" className="bg-[#B31137]  text-white font-[400] text-[18px] leading-[24px] pt-[6px] pb-[8px] px-[28px] ">Donate</a>
                    </div>
                </div>
            </section>
        </div>
    }
}


export default InitComp;