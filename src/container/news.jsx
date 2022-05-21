import React from "react";
import CompNav from "../component/NavbarComp";

import News1 from "../../src/img/news/img-news-1.png"
import News2 from "../../src/img/news/img-news-2.png"
import News3 from "../../src/img/news/img-news-3.png"
import News4 from "../../src/img/news/img-news-4.png"
import News5 from "../../src/img/news/img-news-5.png"
import News6 from "../../src/img/news/img-news-6.png"
import News7 from "../../src/img/news/img-news-7.png"
import News8 from "../../src/img/news/img-news-8.png"
import News9 from "../../src/img/news/img-news-9.png"
import News10 from "../../src/img/news/img-news-10.png"

class eventComp extends React.Component {

    
    render() {
        console.log('test 123')
        return  <div>
             <div className="mb-[75px] lg:mb-[111px]">
                <CompNav />
            </div>
            <section className="bg-[#B31137] py-[60px]">
                <div className="container">
                    <div className="text-center">
                        <h2 className="font-[600] text-[40px] leading-[50px] text-white">Latest News</h2>
                    </div>
                </div>
            </section>
            <section className="bg-[#F4EEE9] py-[50px]">
                <div className="container px-[10%] mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News1} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">09.14.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Tarlton Foundation Sponsors Three Peninsula College Fund Scholars
                                </h4>
                            </div>
                           
                        </div>

                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News2} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">07.13.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Meet the Tarlton Foundation's 2021 Rotary Scholarship Recipients
                                </h4>
                            </div>
                            
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News3} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">09.14.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Rotary Club of Menlo Park Foundation kicks off community Sponsor-a-Scholar program with donation from the Tarlton Foundation
                                </h4>
                            </div>
                            
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News4} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">07.13.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Team Tarlton Boosts Support for Local Community in 2020
                                </h4>
                            </div>
                            
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News5} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">09.14.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Team Tarlton Raises $190,000 to Benefit Cancer Research in 2019
                                </h4>
                            </div>
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News6} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">07.13.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Tarlton Launches Non-Profit to Support Health and Education Initiatives
                                </h4>
                            </div>
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News7} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">09.14.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                John Tarlton Races Across America to Raise Money for Cancer Research
                                </h4>
                            </div>
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News8} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">07.13.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                Tarlton Launches Non-Profit to Support Health and Education Initiatives
                                </h4>
                            </div>
                        </div>
                        <div className="mb-[50px]">
                            <div className="mb-[20px]">
                                <img src={News9} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">09.14.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                John Tarlton Races Across America to Raise Money for Cancer Research
                                </h4>
                            </div>
                        </div>
                        <div>
                            <div className="mb-[20px]">
                                <img src={News10} alt="" />
                            </div>
                            <div className="mb-[10px]">
                                <p className="font-[400] text-[18px] leading-[28px]">07.13.2021</p>
                            </div>
                            <div className="mb-[10px]">
                                <h4 className="text-[#b31137] font-[600] text-[20px] leading-[30px]">
                                John Tarlton is participating in cycling’s Race Across America to raise money for Stanford Cancer Institute
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    }
}

export default eventComp;