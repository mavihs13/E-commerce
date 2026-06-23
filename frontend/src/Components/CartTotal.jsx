import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Title from './Title';

function CartTotal() {
    const {currency,delivery_free,getCartAmount}=useContext(ShopContext)
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title text1={'CART'} text2={'TOTALS'}/>

        </div>
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>

            </div>

        </div>
    </div>
  )
}

export default CartTotal