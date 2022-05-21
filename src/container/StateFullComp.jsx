import React from "react";
import jbtr from '../../src/jbtr-Cancer-landing-photo.png';
import circleOrange from '../../src/Orange-Circle.png';
import CompNav from "../component/NavbarComp";

class StateFullComp extends React.Component {
    

    render() {

        // window.addEventListener('scroll', ()=>{
        //     const header = document.querySelector('header');
        //     const fixedNav = header.offsetTop;
        //     if(window.pageYOffset > fixedNav) {
        //         header.classList.add('navbar-fixed')
        //     } else {
        //         header.classList.remove('navbar-fixed')
        //     }
        // })
        
        return  <div>
            <CompNav />
                <section className="bg-[#59B3E1] w-[100%] py-[100px] lg:py-[182px] relative">
                    <div className="container mx-auto px-[20px]">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {/* <div className="px-[70px]"> */}
                        <div className="mb-[80%] lg:mb-1 lg:px-[70px]">
                        <h1 className="text-white text-[40px] font-[600] w-[100%]  lg:text-[100px]">Advancing Cancer Research</h1>
                        </div>
                        <div className="w-[100%]">
                        <div className="">
                            <div className="absolute bottom-0 right-0">
                            <div className="relative">
                                <div className="absolute bottom-[50px] left-[-40px]">
                                <img src={circleOrange} className="opacity-50 w-[65px] md:w-[100px] lg:w-full" alt="" />
                                </div>
                                <img src={jbtr} className="" alt="" />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </section >
                <section className="bg-[#f4eee9] w-[100%] py-[60px] lg:py-[102px] relative">
        <div className="container mx-auto px-[20px]">
          <div className="lg:max-w-[844px] lg:mx-auto">
            <div className="mb-[80px]">
              <div className="mb-4">
                <h3 className="text-[#B31137] font-[600] text-[35px] leading-[40px]">Challenge</h3>
              </div>
              <div>
                <p className="text-[#313333] font-[400] text-[18px] leading-[30px]">
                  Cancer is one of the most complex and multifaceted medical challenges of our day. To effectively resist this disease and improve long-term survival rates, a comprehensive and integrated approach is required
                </p>
              </div>
            </div>

            <div className="mb-[70px]">
              <div className="mb-4">
                <h3 className="text-[#B31137] font-[600] text-[35px] leading-[40px]">Our Initiative</h3>
              </div>
              <div>
                <p className="text-[#313333] font-[400] text-[18px] leading-[30px]">
                  Like so many others, we have personally felt the impact of cancer in the Tarlton family. The Tarlton Foundation is dedicated to funding and activating new monies to support new research and programs to increase the rate of discovery and applied medicine. Our primary vehicle for raising these funds is through the power of the bicycle. We race, host events, and invite Tarlton’s broad community of stakeholders to actively participate in the effort to resist cancer.
                </p>
              </div>
            </div>

            <div className="mb-[100px]">
              <div>
                <button className="hover:bg-red-900 duration-100 delay-400 bg-[rgb(179,17,55)] text-white p-1 px-[17px] w-[129px]" > <span className="font-[400] text-[18px] leading-[35px]">Donate</span></button >
              </div>
            </div>

            <div className="mb-[119px]">
              <div className="text-center">
                <a className="text-[#B31137] font-[700] text-[20px] leading-[30px] border-b-2 border-[#B31137] py-2">
                  Back to Initiatives
                </a>
              </div>
            </div>

          </div>


        </div>
      </section >
        </div>
        
    }
}

export default StateFullComp;