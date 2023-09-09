import { Product } from "../../interface/product"


const CardProduct = ({name,image,price}: Product) => {
    return (
        <div className="flex flex-col m-1">
            <h1>{name}</h1>
            <img src={image} alt="" />
            <span>{price}</span>
        </div>
    )
}

export default CardProduct