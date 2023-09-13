import { Product } from "../../interface/product"


const CardProduct = ({title,image,prevPrice,newPrice}: Product) => {
    return (
        <div className="flex flex-col items-center m-1">
            <h1>{title}</h1>
            <img src={image} alt="" className="max-w-sm w-20"/>
            <span className="line-through text-red-500">{prevPrice}</span>
            <span>{newPrice}$</span>
        </div>
    )
}

export default CardProduct