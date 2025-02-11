import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

const AllProducts = () => {
  const [openUploadProduct,setOpenUploadProduct]=useState(false)
  return (
    <div>
      <div className='bg-white p-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'>All Product</h2>
        <button className='border-2 border-red-600 text-red-600 py-1 px-3 rounded-full hover:bg-red-600 hover:text-white transition-all' onClick={()=>setOpenUploadProduct(true)}>Upload Product</button>
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
