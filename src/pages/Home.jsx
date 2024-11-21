import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  console.log(allProducts, loading, errorMsg);

  const [currentPage,setCurrentPage] = useState(1)
  const productsPerPage = 8
  const totalPages = Math.ceil(allProducts?.length/productsPerPage)
  const currentPageProductLastIndex = currentPage*productsPerPage
  const currentPageProductFirstIndex = currentPageProductLastIndex-productsPerPage
  const visibleAllProducts = allProducts?.slice(currentPageProductFirstIndex,currentPageProductLastIndex)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const navgateToNextPage = ()=>{
    if(currentPage!=totalPages){
      setCurrentPage(currentPage+1)
    }
  }

  const navgateToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'70px'} height={'70px'} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" />
              loading...
            </div>
            :
            <>
              <div className="grid grid-cols-4 gap-4 ms-5 me-5">
                {
                  allProducts?.length > 0 ?
                    visibleAllProducts?.map(product => (
                      <div key={product?.id} className="rounded border p-4 shadow">
                        <img width={'100%'} height={'100%'} src={product.thumbnail} alt="" />
                        <div className="text-center">
                          <h3 className="text-xl font-bold">{product?.title}</h3>
                          <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View More...</Link>
                        </div>
                      </div>
                    ))
                    :
                    <div className='flex justify-center text-red-600 font-bold items-center my-5 text-lg'>
                      Product Not Found!!!
                    </div>
                }
              </div>
              <div className="text-2xl text-center font-bold mt-20">
                <span onClick={navgateToPrevPage} className="cursor-pointer"><i className="fa-solid fa-backward me-5"></i></span>
                <span>{currentPage} of {totalPages}</span>
                <span onClick={navgateToNextPage} className="cursor-pointer"><i className="fa-solid fa-forward ms-5"></i></span>
              </div>
            </>
        }
      </div>
    </>
  )
}

export default Home