const Photos = () => {
  return (
    <section className="flex items-center justify-center px-24">
      <div className="gallary auto-rows-[10rem] w-full">
        <div className='bg-[url(./img/16.jpg)] col-span-6 row-start-auto row-span-4 bg-cover m-1 hover:m-2  duration-300 '>

        </div>
        <div className='bg-[url(./img/2.jpg)] col-span-5 row-span-2 bg-cover m-1 hover:m-2  duration-300 '>

        </div>
        <div className='bg-[url(./img/18.jpg)] col-span-9 row-span-2 bg-cover m-1 hover:m-2  duration-300 '>

        </div>
        <div className='bg-[url(./img/18.jpg)] col-span-10 row-span-2 bg-cover transition-[margin] duration-300 m-1 hover:m-2 bg-center'>

        </div>
        <div className='bg-[url(./img/3.jpg)] col-span-4 row-span-2 bg-cover  duration-300  m-1 hover:m-2'>

        </div>
      </div>
    </section>

  )
}
export default Photos