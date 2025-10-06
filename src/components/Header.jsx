import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import ThemeBtn from "./ThemeBtn";


const Header = () => {
  const {totalQuantity} = useSelector((state)=>state.cart)
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
            <NavLink to='/'>
            <img src="./shop.png" alt="" className="w-8"/>
            </NavLink>
          <h1 className="lg:text-2xl font-bold text-lg">Shopping Cart</h1>  
        </div>
      
      <div className="flex items-center gap-2">
        <span className="flex mx-5 p-2 relative gap-3">
        
        <Link to="/cart">
        <FaCartShopping className="text-2xl" />
      </Link>
      <span className="bg-red-500 px-2 rounded-xl absolute left-8 bottom-6 text-sm">{totalQuantity}</span>
      </span>
      <ThemeBtn/>
      </div>
      
    </div>
  );
};

export default Header;
