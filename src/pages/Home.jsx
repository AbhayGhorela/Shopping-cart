import { useDispatch, useSelector } from "react-redux"
import Products from "../components/Products"
import { fetchProducts } from "../features/productSlice"
import { useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdError } from "react-icons/md";


const Home = () => {
  const dispatch = useDispatch();
  const {items, status ,error} = useSelector((state)=>state.products);

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetchProducts());
    }
  },[dispatch,status])


  if(status === 'loading'){
    return <div className="w-full h-screen flex items-center justify-center text-5xl animate-pulse font-medium"><span><AiOutlineLoading className="animate-spin"/></span>Loading...</div>
  }

  if(status === 'failed'){
    return <div className="w-full h-screen flex items-center justify-center text-5xl animate-pulse"><span><MdError className="text-red-500"/></span> Error:{error}</div>
  }

  return (
    <div className="p-2 dark:text-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold border-b-2 border-gray-300 py-2 p-1">All Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {items.map((item)=>{
          return <Products key={item.id} item={item} />
        })}
        
      </div>
      
    </div>
  )
}

export default Home