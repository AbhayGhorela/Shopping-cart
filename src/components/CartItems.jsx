
import {useDispatch } from "react-redux";
import { increaseQty,decreaseQty } from "../features/cartSlice";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  
  return (
    <div className=" w-full flex justify-between items-center border-b-2 border-gray-300 p-4 font-semibold">
      <div className="w-full flex items-center gap-4">
        <img
          className="lg:w-15 lg:h-8 w-5 h-8 object-contain"
          src={item.image}
          alt=""
        />
        <span className="lg:text-xl text-[8px] font-bold">{item.title}</span>
      </div>
      <div className=" flex lg:gap-15 gap-3 lg:text-lg text-[8px] items-center">
        <span>${item.price.toFixed(2)}</span>
        <span className="flex items-center lg:p-2 p-1 border-2 border-gray-300 rounded">
          <button onClick={() => dispatch(decreaseQty(item.id))} className="px-2 border-r-2 border-gray-300">-</button>
          <span className="px-2">{item.quantity}</span>
          <button onClick={() => dispatch(increaseQty(item.id))} className="px-2 border-l-2 border-gray-300">+</button>
        </span>
        <span>{item.total.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartItems;
