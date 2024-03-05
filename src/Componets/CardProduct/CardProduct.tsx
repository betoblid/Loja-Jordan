
import tenis from "../../assets/tenis.svg"
import { FormatMoney } from "../../utils/FormatMoney"

interface ProductProps {
    product: {
        id: string,
        thumb: string,
        title: string,
        price: number,
        category: string

    }
}

export const CardProduct = ({ product }: ProductProps) => {

    return (
        <div className="w-[384px] shadow-sm hover:shadow-md rounded-xl">
            <div className="bg-[#F3F7FF] flex items-center justify-center">
                <img src={product.thumb} alt="" />
            </div>
            <div className="pl-2">
                <h4 className="font-medium text-lg text-[#121214]">
                    {product.title}
                </h4>
                <p className="text-[#7CA2F4] font-medium text-base my-2">
                Tênis {product.category}
                </p>
                <span className="text-[#121214] font-medium text-xl">
                    {FormatMoney(product.price)}
                </span>
            </div>
        </div>
    )
}