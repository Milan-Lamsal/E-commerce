import React, { useContext, useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContex';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
    const { productId } = useParams(); // using this hook we get product id 
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(false);
    const [image, setImage] = useState('')
    const [size, setSize] = useState('')

    const fetchProductData = async () => {
        products.map((item) => {
            if (item._id == productId) {
                setProductData(item)
                setImage(item.image[0])
                return null;
            }
        })

    }

    useEffect(() => {
        fetchProductData();
    }, [productId, products])
    return productData ? (
        <div className='border-t-2 pt-10 translate-opacity ease-in duration-500 opacity-100'>
            {/*=============== Product Data ================== */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* =========== Product Images =====================  */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto  sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            productData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>
                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>
                </div>
                {/*=================== Product Info====================== */}
                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-1 mt-2'>
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_icon} alt="" className="w-3 5" />
                        <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                        <p className='pl-2'>(154)</p>
                    </div>
                    <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p>Select Size</p>
                        <div className='flex gap-2'>
                            {productData.sizes.map((item, index) => (
                                <button onClick={() => setSize(item)} key={index} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 ' : ''} `}>{item}</button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product.</p>
                        <p>Cash on delivery is available on this product.</p>
                        <p>Easy return and exchange policy within 7 days.</p>
                    </div>
                </div>
            </div>
            {/*============================ Description and Review Section ====================== */}
            <div className='mt-20'>
                <div className='flex'>
                    <b className='border px-5 py-3 text-sm'>Description</b>
                    <p className='border px-5 py-3 text-sm'>Reviews(154)</p>
                </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Our E-commerce website is a modern, user-friendly online shopping platform designed to offer customers a seamless and convenient retail experience from the comfort of their own homes. The website serves as a digital storefront where users can browse, select, and purchase a wide range of products — from fashion and electronics to home essentials and more. </p>
                    <p>Built with a focus on intuitive navigation and responsive design, the website ensures smooth performance on desktops, tablets, and smartphones. Customers can easily explore product categories, view detailed product descriptions and images, add items to their shopping cart, and complete secure online transactions.</p>
                </div>
            </div>
            {/*-------------------------- Dispaly realted products ----------------------------------- */}
            <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

        </div>
    ) : <div className='opacity-0'></div>
}

export default Product
