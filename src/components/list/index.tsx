import Item, { Info } from "../element"


const information: Info[] = [
  { place: "new york", price: "800,000", url: "", id: 6 },
  { place: "new york", price: "800,000", url: "", id: 2 },
  { place: "new york", price: "800,000", url: "", id: 3 },
  { place: "new york", price: "800,000", url: "", id: 8 },
  { place: "new york", price: "800,000", url: "", id: 10 },
  { place: "new york", price: "800,000", url: "", id: 5 },
  { place: "new york", price: "800,000", url: "", id: 7 },
  { place: "new york", price: "800,000", url: "", id: 1 },
  { place: "new york", price: "800,000", url: "", id: 4 },
  { place: "new york", price: "800,000", url: "", id: 11 },
]
const List = () => {
  return (
    <section className="flex items-center justify-center px-24 ">
      <div className="List w-full">
        {information.map((maper, i) => {
          return (<Item key={i} {...maper} />)
        })}
      </div>
    </section>
  )
}
export default List