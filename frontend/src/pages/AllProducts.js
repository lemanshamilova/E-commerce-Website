import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct]=useState(false)
  const [allProduct,setAllProduct]=useState([])

  const fetchAllProduct=async()=>{
    const response=await fetch(SummaryApi.allProduct.url ,{
      method:SummaryApi.allProduct.method,
      credentials:"include"
    })

    const dataResponse=await response.json()

    setAllProduct(dataResponse?.data || [])

  }

  useEffect(()=>{
    fetchAllProduct()

  },[])

  return (
    <div>
      <div className='bg-white p-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 py-1 px-3 rounded-full hover:bg-red-600 hover:text-white transition-all' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
      </div>


     {/* all product*/}
      <div className='flex items-center gap-5'>
        {
          allProduct?.map((product,index)=>{
            {console.log(product)}
            return (
              <div key={index} className='bg-white p-4 rounded'>
               
                <img src={product?.productImage[0]} width={120} height={120} alt='img'/>
              </div>
            )
          })
        }

      </div>


      {/**Upload product component */}

      {
        openUploadProduct && (
          <UploadProduct onClose={()=>setOpenUploadProduct(false)}/>

        )
      }
    </div>
  )
}

export default AllProducts
