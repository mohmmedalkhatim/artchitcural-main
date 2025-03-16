import { useState } from "react"
import { FaApper } from "react-icons/fa"
import { Link } from "react-router-dom"


type link = {
  title: string,
  Route: string
}

const links: link[] = [
  {
    title: "Home",
    Route: "/"
  },
  {
    title: "catgories",
    Route: "/"
  },
  {
    title: "Rents",
    Route: "/"
  },
  {
    title: "About us",
    Route: "/about"
  }
]
const Header = () => {
  const [index, setindex] = useState(0)

  return (
    <header>
      <div className="List col-[3/-3]">
        <div className="C">
          {links.map((maper, i) => {
            return (
              <>
                {i === 2 ? <div key={10} className="flex items-center col-span-2 justify-center font-medium text-3xl">Alax</div> : ""}
                <Link className="col-span-2 " key={i} to={maper.Route} onClick={() => setindex(i)}>
                  {index == i ? <div className="w-4 border rounded-lg"></div> : ""}
                  {maper.title.toLocaleUpperCase()}
                </Link>
              </>)
          })}
        </div>
      </div>
    </header>
  )
}
export default Header