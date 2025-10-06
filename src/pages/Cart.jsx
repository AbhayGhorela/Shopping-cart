import { useSelector, useDispatch } from "react-redux";
import CartItems from "../components/CartItems";
import { clearCart } from "../features/cartSlice";




const Cart = () => {
  const dispatch = useDispatch();
  
  const {cartItems,totalPrice} = useSelector((state)=>state.cart)
  console.log(cartItems);


  if(cartItems.length === 0){
    return <div className="w-full h-screen flex justify-center items-center font-semibold text-4xl uppercase dark:bg-gray-900 dark:text-white">Your cart is empty</div>
  }
  
  return (
    <div className="w-full h-screen p-4 flex flex-col items-center dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold py-2 my-2">My Cart</h1>
      <div className=" w-full flex justify-between items-center border-b-2 border-gray-300 p-4 font-semibold">
        <div className="w-full">
          <span>Item</span>
        </div>
        <div className=" flex gap-20">
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
      </div>
      {cartItems.map((item) => (
        <CartItems key={item.id} item={item} />
      ))}
      <div className="font-bold lg:text-2xl sm:text-sm w-full flex justify-between mt-4">
        <button onClick={()=> dispatch(clearCart())} className="lg:p-2 p-1 border-2 border-gray-300 rounded lg:text-lg text-[8px] hover:bg-red-400">Clear Cart</button>
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
