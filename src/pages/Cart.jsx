import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header/>
    <div className='px-5' style={{paddingTop:'100px',marginBottom:'170px'}}>
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
                <td className="font-semibold">Prise</td>
                <td className="font-semibold">...</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Product Name</td>
                <td><img width={'70px'} height={'70px'} src="https://off.com.ph/_next/image?url=https%3A%2F%2Fedge.sitecorecloud.io%2Fscjohnsonana080-dart-production-40df%2Fmedia%2Fproject%2Fdart%2Foff%2Fphilippines%2Fhomepage%2Fcategory-images%2Foff_ph_4x3_720x540_category_card-family.png%3Fh%3D540%26iar%3D0%26w%3D720&w=3840&q=75" alt=""/></td>
                <td>
                  <div className="flex">
                    <button className='font-bold'>-</button>
                    <input style={{width:'40px'}} value={'0'} type="text" className='border rounded mx-2 p-1'/>
                    <button className='font-bold'>+</button>
                  </div>
                </td>
                <td>250$</td>
                <td><button className='text-red-600'><i className="fa-solid fa-trash"></i></button></td>
              </tr>
            </tbody>
          </table>
          <div className="float-right mt-5">
            <button className='bg-red-600 rounded p-2 text-white'>EMPTY CART</button>
            <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>SHOP MORE</Link>
          </div>
        </div>
        <div className="col-span-1 mt-5">
          <div className="border rounded shadow p-5 mb-5">
            <h2 className="text-2xl font-bold my-4">Total Amount: <span className='text-red-600'>$ 250</span></h2>
            <hr />
            <button className='bg-green-600 rounded p-2 text-white w-full text-xl; mt-4'>CHECK OUT</button> 
          </div>
        </div>
      </div>
      </>
    </div>
    </>
  )
}

export default Cart