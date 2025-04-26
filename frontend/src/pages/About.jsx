import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={' US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p><b >Welcome to T-shirt Factory — where fashion meets passion!</b>
                        We believe that great style is for everyone. Our mission is to bring you trendy, high-quality clothing that makes you feel confident and comfortable, every single day.</p>
                    <p>Our journey began with a simple idea: Everyone deserves to feel confident in what they wear. We are passionate about offering high-quality, affordable pieces that reflect the latest trends — without compromising on comfort.
                        At LuxeThreads, we celebrate individuality, sustainability, and creativity. Our collections are carefully curated for dreamers, trendsetters, and everyday fashion lovers.
                        Thank you for choosing LuxeThreads to be part of your style story. We can't wait for you to explore our latest drops! 🌟</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>We aim to inspire confidence and self-expression through fashion. We believe that what you wear should not just look good but also feel good, inside and out.</p>
                </div>
            </div>
            <div className='text-xl py-4 '>
                <Title text1={'WHY'} text2={' CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We believe great style starts with great quality. Every piece you see in our store has been carefully inspected to ensure it meets the highest standards of craftsmanship, comfort, and durability. Because you deserve nothing less.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>We have designed every step of your shopping experience to be simple and seamless — from finding your perfect style to fast delivery at your doorstep. Your convenience is our priority.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>We pride ourselves on delivering outstanding service — fast responses, helpful support, and a shopping experience that puts your needs first. Your satisfaction means everything to us!</p>
                </div>
            </div>
            <NewsLetterBox />

        </div>
    )
}

export default About
