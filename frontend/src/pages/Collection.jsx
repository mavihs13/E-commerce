import React from 'react'
import { useContext,useState,useEffect } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../Components/Title'
import ProductItem from '../Components/ProductItem'


function Collection() {
  const {products}=useContext(ShopContext)
  const [showFilter,setShowFilter]=useState(false);
  const [filterProducts,setFilterProducts]=useState([]);
  const [Category,setCategory]=useState([]);
  const [subCategory,setSubCategory]=useState([]);

const toggleCategory=(e)=>{
  if(Category.includes(e.target.value)){
    setCategory(prev=>prev.filter(item=>item!==e.target.value))
  }else{
    setCategory(prev=>[...prev,e.target.value])
  }
}

const toggleSubCategory=(e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter(item=>item!==e.target.value))
  }else{
    setSubCategory(prev=>[...prev,e.target.value])
  }
}

const applyFilter=()=>{
  let productsCopy=products.slice();
  if(Category.length>0){
    productsCopy=productsCopy.filter(item=>Category.includes(item.category))
  }
}

  useEffect(()=>{
      setFilterProducts(products);
  })



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
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory}/>Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'women'} onChange={toggleCategory}/>Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'kids'} onChange={toggleCategory}/>Kids
            </p>

          </div>

         </div>
         
         {/*subcategory filter*/}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ?'' :'hidden'} sm:block`}>
          <p className='font-medium mb-3 text-sm'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm text-gray-700 font-light'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'winterwear'} onChange={toggleSubCategory}/>Winterwear
            </p>

          </div>

         </div>
         
      </div>
   
    {/*Products List Section*/}
    <div className='flex-1'>

      <div className=' flex justify-between text-base sm:text-2xl mb-4'>

        <Title text1={'ALL'} text2={'COLLECTION'}/>
        {/*Sorting options*/}

        <select className = 'border border-gray-300 text-sm px-2 '>
          <option value="relevant">Sort by: Relevant</option>
          <option value="low-high">Sort by: Price - Low to High</option>
          <option value="high-low">Sort by: Price - High to Low</option>

        </select>

      </div>
      {/*Map through products and render*/}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProducts.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
          ))
        }

      </div>

    </div>
      
    </div>
  )
}

export default Collection