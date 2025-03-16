import {  FaChevronRight } from "react-icons/fa"

const Work = () => {
  return (
    <section className="flex items-center justify-between">
        <div className="p-12 border">
         <div className="grid row-span-4 dis">
                <h1 className="title mb-10">We Live to Compine <br />The Nuture &<br /> Modum Life</h1>
                <div className="btn">
                    learn more
                    <div className="ml-2">
                        <FaChevronRight size={"0.9rem"}/>
                    </div>
                </div>
         </div>
         <div className="pic w-full h-full"/>   
        </div>
    </section>
  )
}
export default Work