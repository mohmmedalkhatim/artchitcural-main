import { useEffect, useState } from "react"

const Carousel = () => {
  const map = [1, 2, 3]
  const [index, setindex] = useState(0);
  useEffect(() => {
    const carousel = document.querySelector<HTMLElement>(".carousel");
    const width = document.querySelector("section")?.clientWidth;
    if (carousel) {
      if (width) {
        carousel.scrollLeft = width * index
      }
      carousel.style.scrollBehavior = "smooth"
    }
    setTimeout(() => {

      if (index < 2) {
        setindex(index + 1)
        return;
      }
      setindex(0)
    }, 5000)
  }, [index])
  return (
    <section className="List relative">
      <div className="carousel col-[1/-1]">
        <div className="">
          <div>
            <div className="title">
              modoum design
            </div>
            <p className="m">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempore a alias dolorum quia exercitationem doloremque, quidem dicta deleniti accusamus.
            </p>
          </div>
          <img src="/img/main.png" alt="" />
        </div>
        <div className="">
          <div className="title">
            modumn
          </div>
          <img src="/img/secondary.png" alt="" />
        </div>
        <div className="">
          <div className="title">
            modumn
          </div>
          <img src="/img/tarnary.png" alt="" />
        </div>
      </div>
      <div className="control_warper">
        <div className="control">
          {map.map((_, i) => (<div className="controller" onClick={() => { setindex(i) }} id={index === i ? "active" : ""}></div>))}
        </div>
      </div>
    </section>
  )
}
export default Carousel