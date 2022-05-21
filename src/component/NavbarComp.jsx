import React from "react";
import logo from '../../src/logo-tarlton.png'
import { Link } from "react-router-dom";

const CompNav = () => {
    return  <header className="bg-[#F4EEE9] fixed  top-0 left-0 w-full flex item-center z-10 ">
    {/* <div className="w-full "> */}
    <div className="w-full lg:container lg:mx-auto  lg:px-[80px]">
      <div className="flex items-center justify-between relative ">
        <div className="px-4">
          <Link className="font-bold text-lg text-primary block pt-[20px] pb-[10px] lg:py-[30px]" to="/">
            <img src={logo} className="" alt="" />
          </Link>
        </div>
        <div className="flex item-center">
          <button onClick={() => {
            const hamburger = document.querySelector('#hamburger');
            const navMenu = document.querySelector('#nav-menu');
            hamburger.classList.toggle('hamburger-active')
            navMenu.classList.toggle('hidden')
          }}
            id="hamburger" name="hamburger" type="button" className="block absolute top-[25%] right-[20px] lg:hidden">
            <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left "></span>
            <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
            <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left "></span>
          </button>
          <nav id="nav-menu" className="hidden absolute py-5 bg-[#B31137] lg:bg-[#F4EEE9] w-full right-0 top-full lg:block lg:static">
            <ul className="block lg:flex">
              <li className="group">
                <Link className="text-base text-dark py-2 mx-8 flex text-white text-[38px] leading-[48px] lg:text-[#313333] lg:font-[400] lg:text-[18px] lg:leading-[35px]" to="/about">About</Link>
              </li>
              <li className="group">
                <Link className="text-base text-dark py-2 mx-8 flex text-white text-[38px] leading-[48px] lg:text-[#313333] lg:font-[400] lg:text-[18px] lg:leading-[35px]" to="/init">initiatives</Link>
              </li>
              <li className="group">

                <Link className="text-base text-dark py-2 mx-8 flex text-white text-[38px] leading-[48px] lg:text-[#313333] lg:font-[400] lg:text-[18px] lg:leading-[35px]" to="/event">Events</Link>
              </li>
              <li className="group">
                <Link className="text-base text-dark py-2 mx-8 flex text-white text-[38px] leading-[48px] lg:text-[#313333] lg:font-[400] lg:text-[18px] lg:leading-[35px]" to="/news">News</Link>
              </li>
              <li className="group">
                <Link className="text-base text-dark py-2 mx-8 flex text-white text-[38px] leading-[48px] lg:text-[#313333] lg:font-[400] lg:text-[18px] lg:leading-[35px]" to="/contact">Contact</Link>
              </li>
              <li className="group">
                <a className="bg-[#B31137] hidden lg:block h-[40px] px-3 mx-8 text-center w-[96px] relative top-2  text-white font-[400] text-[18px] leading-[35px]">Donate</a>
              </li>
              <li className="group mt-4">
                  <button className="hover:bg-red-900 duration-100 delay-400 bg-white text-white p-1 px-[17px] py-2 mx-4 lg:hidden" > <span className="text-[38px] leading-[48px] text-[#B31137]">Donate</span></button >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
}

export default CompNav;