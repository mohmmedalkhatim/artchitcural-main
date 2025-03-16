import {  FaChevronRight, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="text-secondary-50">
        <div className="Grid  font-serif">
            <div className=" flex flex-col gap-4 p-4 col-span-5">
                <div >12 40th street San frainsco CA941Q <br /> United States of America </div>
                <div >Phone <br /> <FaChevronRight className="inline mr-2"/> 1895-3434-0985</div>
                <div >Email <br /><FaChevronRight className="inline mr-2"/>Alax@gmail.com</div>
            </div>
            <div className=" flex flex-col gap-4 p-4 col-span-5">
                
            </div>
            <div className=" flex flex-col gap-4 p-4 col-span-5">

            </div>
            <div className=" flex flex-col gap-4 p-4 col-span-5">

            </div>
        </div>
        <div className="foot">
          <div className="border w-full rounded-lg mr-4"/>
            <div className="w-[20rem] flex gap-8 items-center justify-center">
              <FaFacebook size={"1.4rem"}/>
              <FaLinkedin size={"1.4rem"}/>
              <FaGithub size={"1.4rem"}/>
            </div>
          <div className="border w-full rounded-lg ml-4"/>
        </div>
    </footer>
  )
}
export default Footer