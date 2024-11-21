import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeCartItem, emptyCart } from '../redux/slices/cartSlice'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userCart = useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal] = useState(0)

  const handleDecrementQuantity = (product)=>{
    if(product?.quantity>1){
      dispatch(decrementQuantity(product.id))
    }else{
      dispatch(removeCartItem(product.id))
    }
  }

  const checkout = ()=>{
    dispatch(emptyCart())
    alert("Your Order is Confirmed... thank you for purchasing with us!!!")
    //redirect to homepage
    navigate("/")
  }

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalprice).reduce((a,b)=>a+b))
    }
  },[userCart])

  return (
    <>
    <Header/>
    <div className='px-5' style={{paddingTop:'100px',marginBottom:'170px'}}>
      {
        userCart.length>0?
        <>
      <h1 className='text-5xl font-bold text-blue-600'>Cart Summery</h1>
      <div style={{marginTop:'50px'}} className="grid grid-cols-3 gap-4 mt-5">
        <div className="col-span-2 border rounded p-5 shadow">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <td className="font-semibold">#</td>
                <td className="font-semibold">Name</td>
                <td className="font-semibold">Image</td>
                <td className="font-semibold">Quantity</td>
                <td className="font-semibold">Price</td>
                <td className="font-semibold">...</td>
              </tr>
            </thead>
            <tbody>
              {
                userCart.map((product,index)=>(
                  <tr>
                <td>{index+1}</td>
                <td>{product.title}</td>
                <td><img width={'70px'} height={'70px'} src={product?.thumbnail} alt=""/></td>
                <td>
                  <div className="flex">
                    <button onClick={()=>handleDecrementQuantity(product)} className='font-bold'>-</button>
                    <input style={{width:'40px'}} value={product?.quantity} type="text" className='border rounded mx-2 p-1'/>
                    <button onClick={()=>dispatch(incrementQuantity(product?.id))} className='font-bold'>+</button>
                  </div>
                </td>                
                <td>${product?.totalprice}</td>
                <td><button onClick={()=>dispatch(removeCartItem(product?.id))} className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
              </tr> 
                ))
              }
               
            </tbody>
          </table>
          <div className="float-right mt-5">
            <button onClick={()=>dispatch(emptyCart())} className='bg-red-600 rounded p-2 text-white'>EMPTY CART</button>
            <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>SHOP MORE</Link>
          </div>
        </div>
        <div className="col-span-1 mt-5">
          <div className="border rounded shadow p-5 mb-5">
            <h2 className="text-2xl font-bold my-4">Total Amount: <span className='text-red-600'>$ {cartTotal}</span></h2>
            <hr />
            <button onClick={checkout} className='bg-green-600 rounded p-2 text-white w-full text-xl; mt-4'>CHECK OUT</button> 
          </div>
        </div>
      </div>
      </>
      :
      <div className='flex flex-col justify-center items-center h-screen'>
        <img className='w-100 h-1/2' src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt="" />
        <h1 className='text-3xl'>Your Cart Is Empty</h1>
      </div>
      }
    </div>
    </>
  )
}

export default Cart