import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../cartSlice";

const products = [
    {
        id:0,
        title:'Milk',
        price: 19.99,
        discountedPrice: 19.99
    },
    {
        id:1,
        title:'Bread',
        price: 12.99,
        discountedPrice: 12.99
    },
    {
        id:2,
        title:'Cheese',
        price: 25.99,
        discountedPrice: 25.99
    },
]
function AddProduct(){
    const cart = useSelector((state) => state.products);
    const dispatch = useDispatch();

    return(
        <div>
            <div>
                {products.map(item =>{
                    <ul>
                        <li key={item.id}>{item.title} - {item.price}</li>
                    </ul>
                })}
            </div>
        <div>Items in cart: {cart}</div>
        <button onClick={() => dispatch(addProduct())}>Add to cart</button>
        </div>
    )
}
export default AddProduct;