
import db from "../../db.json"
import { CardProduct } from "../CardProduct/CardProduct"
export const ListProducts = () => {

    return(
        <div className="flex flex-wrap justify-center items-center gap-7 max-w-[1210px] mx-auto my-20">
            {
                db.products.map((product) => <CardProduct key={product.id} product={product}/>)
            }
        </div>
    )
}