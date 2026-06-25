import React from 'react'
import Title from '../Components/Title'
import NewsLetterBox from '../Components/NewsLetterBox'
import { assets } from '../assets/assets'

function About() {
  return (
    <div>
      <div className='text-2xl text-centre pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>At our store, we believe that fashion is a way to express your unique personality. We offer a wide range of stylish and comfortable clothing for every age and occasion, carefully selected to provide the perfect blend of quality, trend, and value.</p>
        <p>Our mission is to make great fashion accessible to everyone. From everyday essentials to standout outfits, we are dedicated to helping our customers look and feel their best with collections that inspire confidence, comfort, and individuality.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission is to provide high-quality, fashionable clothing that helps people express their individuality with confidence. We are committed to offering trendy designs, exceptional comfort, and affordable prices to make great fashion accessible to everyone.

        We strive to create a seamless shopping experience while continuously expanding our collection to meet the diverse needs of our customers. Through quality, innovation, and customer satisfaction, we aim to become a trusted destination for modern fashion.</p>
        </div>
      </div>
      <div className='text-xl pr-4'>
        <Title text1={'WHY'}text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm md-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 felx felx-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We are committed to providing high-quality clothing that combines comfort, durability, and style. Every product is carefully checked to ensure it meets our standards, giving you fashion you can trust and enjoy every day.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 felx felx-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>We make shopping simple and hassle-free with an easy-to-use platform, a wide range of products, and a smooth checkout process. Our goal is to help you find your favorite styles quickly and enjoy a comfortable shopping experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 felx felx-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p c className='text-gray-600'>Customer satisfaction is our top priority. Our dedicated support team is always ready to assist you, ensuring a friendly, reliable, and smooth shopping experience from start to finish.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About