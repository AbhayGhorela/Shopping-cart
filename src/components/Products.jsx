import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

const Products = ({ item }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const isInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  const handleAdd = () => {
    dispatch(addToCart(item));
  }

  const handleRemove = () =>{
    dispatch(removeFromCart(item.id));
  }


  return (
    <div className="p-4 rounded border border-gray-500 flex flex-col justify-between dark:bg-gray-700">
      <img
        src={item.image}
        alt="product images"
        className="w-48 h-48 object-contain mx-auto"
        loading="lazy"
      />
      <h2 className="text-lg font-semibold my-2">{item.title}</h2>
      <p className="font-bold">${item.price}</p>
      {isInCart ? (
        <button
          onClick={handleRemove}
          className="bg-red-500 text-white px-4 py-2 rounded mt-2 hover:bg-red-600"
        >
          Remove from Cart
        </button>
      ) : (
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Products;
