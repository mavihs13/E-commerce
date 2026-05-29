import React from 'react'
import { useContext,useState } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'

function Collection() {
  const {products}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false)
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/*Filter Section*/}

      <div className='min-w-60'>
         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTER
          <img className={`h-3 sm:hidden ${showFilter ?'rotate-90':''}`} src={assets.dropdown_icon} />
         </p>

         {/*category filter*/}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ?'' :'hidden'} sm:block`}>
          <p className='font-medium mb-3 text-sm'>CATEGORY</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700 font-light'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'women'}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'kids'}/>Kids
            </p>

          </div>

         </div>
         
         {/*subcategory filter*/}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'' :'hidden'} sm:block`}>
          <p className='font-medium mb-3 text-sm'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700 font-light'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'winterwear'}/>Winterwear
            </p>

          </div>

         </div>
         
      </div>
   
    {/*Products List Section*/}
    
      
    </div>
  )
}

export default Collection