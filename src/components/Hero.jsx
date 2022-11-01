import React, { Fragment } from 'react';
import { useState } from 'react';
import {data, ratingToHigh, ratingToLow, priceToHigh, priceToLow} from "../data/data.jsx";
import { AiFillStar } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";

const Hero = () => {
   
    const [foodData, setfoodData] = useState(data);
  

    const filterHandler = (e) => {
        if(e.target.name === "all") {
            setfoodData(data);
        }
        if(e.target.name === "rating to high") {
            setfoodData(ratingToHigh);
        }
        if(e.target.name === "rating to low") {
           setfoodData(ratingToLow);
        }
        if(e.target.name === "price to high") {
            setfoodData(priceToHigh);
        }
        if(e.target.name === "price to low") {
            setfoodData(priceToLow);
        }
    };
    return (
        <>
            <div className='w-full max-w-[1640px]  2xl:mx-auto mt-36'>
                <div className='relative w-[100%] h-[150px]'>
                    <div className='text-center absolute top-5 md:top-3 w-[100%]'>
                        <h1 className='py-6 text-2xl md:text-3xl font-bold'>Top Items</h1>
                       
                    </div>
                    <div className='absolute pl-4 top-20 left-0 w-[100%]'>
                        <p className='text-normal sm:text-xl font-bold flex items-center'><span>Filters</span><BsFilter className='ml-2'  /></p>
                        <div className='flex flex-wrap'>
                            <button onClick={filterHandler} name="all" className='border  hover:scale-105 font-semibold border-cyan-600 hover:bg-cyan-400  px-2 mr-2 mt-1 md:mt-0  py-1 rounded '>All</button>
                            <button  onClick={filterHandler} name="rating to high" className='border hover:scale-105 font-semibold border-cyan-600 hover:bg-cyan-400 px-2 mr-2 mt-1 md:mt-0  py-1 rounded '>Rating: Low to High</button>
                            <button onClick={filterHandler} name="rating to low" className='border hover:scale-105 font-semibold border-cyan-600 hover:bg-cyan-400  px-2 mr-2 mt-1 md:mt-0  py-1 rounded '>Rating: High to Low</button>
                            <button onClick={filterHandler} name="price to high" className='border hover:scale-105 font-semibold border-cyan-600 hover:bg-cyan-400  px-2 mr-2 mt-1 md:mt-0  py-1 rounded '>Price: Low to High</button>
                            <button onClick={filterHandler} name="price to low" className='border hover:scale-105 font-semibold border-cyan-600 hover:bg-cyan-400  px-2 mr-2 mt-1 md:mt-0  py-1 rounded '>Price: High to Low</button>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] mt-20 md:mt-4  grid gap-6 md:grid-cols-2 lg:grid-cols-3 gap-x-0 2xl:grid-cols-4'>
                    {foodData.map((item) => {
                        return (
                            <Fragment key={item.id}>
                                <main  className='w-[100%] px-4  hover:scale-105 duration-300  h-[350px]'>
                                    <img src={item.image}
                                        className="rounded-t-xl" alt={`${item.name}`} style={{ width: "100%", height: "70%" }} />
                                    <div className='w-[100%] h-[30%] rounded-b-xl shadow-2xl'>
                                        <div className='flex justify-between items-center'>
                                            <div>
                                                <h1 className='text-base font-bold px-2 capitalize pt-2'>{item.name}: ₹{item.price}</h1>
                                                <p className='px-2 text-xs capitalize font-medium'>{item.quantity}</p>
                                            </div>
                                            <span style={{backgroundColor: item.rating < 4.0? "#f5901d" : "#24963F"}} className='flex w-12 mr-4 text-white rounded justify-center  items-center '>{item.rating}<AiFillStar size={15} className="ml-1" /></span>
                                        </div>
                                        <button className='border border-black rounded-lg px-2 py-1 mt-2 ml-2 font-semibold'>Add To Cart</button>
                                    </div>
                                </main>
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default Hero