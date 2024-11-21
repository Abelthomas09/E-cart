import React from 'react'
import Header from '../components/Header'
import { removeItem } from '../redux/slices/wishlistSlice';
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice';

const Wishlist = () => {
  const userCart = useSelector(state=>state.cartReducer)
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const dispatch = useDispatch()

const handleCart = (product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct = userCart?.find(item=>item?.id==product.id)
    if(existingProduct){
      alert('Product Quatity Increment In Your Cart!!!')
    }else{
      alert('Product Added to your Cart!!!')  
    }
  }


  return (
    <>
    <Header/>
   <div style={{paddingTop:'100px'}} className='px-5'>
      {
        userWishlist?.length>0 ?
        <>
      <h1 className="text-4xl text-red-600 font-bold mb-5">My Wishlist</h1>
      <div className="grid grid-cols-4 gap-4">
        {
          userWishlist?.map(product=>(
            <div key={product?.id} className="rounded border p-2 shadow">
          <img width={'100%'} height={'100%'} src={product?.thumbnail} alt="" />
          <div className="text-center">
            <h3 className="text-xl font-bold">{product?.title}</h3>
            <div className="flex justify-evenly mt-3">
              <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><li className="fa-solid fa-heart-circle-xmark text-red-600"></li></button>
              <button onClick={()=>handleCart(product)} className='text-xl'><li className="fa-solid fa-cart-plus text-green-700"></li></button>
            </div>
          </div>
        </div>
          ))
        }
      </div>
      </>
      :
      <div className='flex flex-col justify-center items-center h-screen'>
        <img className='w-100 h-1/2' src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='text-3xl'>Your Wishlist Is Empty</h1>
      </div>
      }
   </div>
    </>
  )
}

export default Wishlist