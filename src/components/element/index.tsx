import {FaArrowRight} from 'react-icons/fa'

export type Info = {
    place: string
    price: string
    url: string
    id: number
}

const Item = (info:Info) => {
    return (
        <div className={`item`}>
            <div className={` h-[17rem] w-[16rem] `}  >
                <img src={`/img/${info.id}.jpg`} className='h-full w-full' alt="" />
            </div>
            <div className='p-4'>
            <div className='text-2xl'>{info.place}</div>
            <div className='flex items-center justify-between'>{info.price}<FaArrowRight/></div>
            </div>
        </div>
    )
}
export default Item