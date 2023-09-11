import { Product } from "../../interface/product"


const CardProduct = ({title,image,price}: Product) => {
    return (
        <div className="flex flex-col m-1">
            <h1>{title}</h1>
            <img src={image} alt="" className="max-w-sm"/>
            <span>{price}$</span>
        </div>
    )
}

export default CardProduct