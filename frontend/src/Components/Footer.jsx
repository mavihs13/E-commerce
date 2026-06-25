import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          <div>
            <img src={assets.logo} className='mb-5 w-32'/>
            <p className='w-full md:w-2/3 text-gray-600'>
                Cool Cloths brings you stylish, high-quality fashion for every occasion. We are dedicated to offering trendy designs, comfort, and value while providing a seamless shopping experience for all our customers.
            </p>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5'>
                GET IN TOUCH
            </p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1 234 567 8900</li>
                <li>contact@zcollections.com</li>
            </ul>
          </div>
 

        </div>

        <div>
            <hr/>
            <p className='py-5 text-center'> Copyright © 2024 Z-Collections . All rights reserved.</p>

        </div>



    </div>
  )
}

export default Footer