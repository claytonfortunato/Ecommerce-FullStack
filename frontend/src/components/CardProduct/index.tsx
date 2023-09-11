import { Product } from "../../interface/product"


const CardProduct = ({title,image,prevPrice,newPrice}: Product) => {
    return (
        <div className="flex flex-col m-1">
            <h1>{title}</h1>
            <img src={image} alt="" className="max-w-sm"/>
            <span className="line-through">{prevPrice}</span>
            <span>{newPrice}$</span>
        </div>
    )
}

export default CardProduct