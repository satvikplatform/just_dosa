import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Specials = () => {
  return (
    <section className='w-full max-w-[1640px] 2xl:mx-auto'>
      <h1 className='py-6 text-center text-xl md:text-3xl font-bold'>Today Specials</h1>
      <div className='w-[100%]  grid gap-6 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4'>
        <main className='w-[100%] px-4  hover:scale-105 duration-300  h-[350px]'>
          <img src="https://media.istockphoto.com/photos/crispy-pancake-made-of-fermented-whole-grain-kodo-millet-batter-with-picture-id1321356515?k=20&m=1321356515&s=612x612&w=0&h=T_mt3ibD5ZMexN7avpVm6vH0qtuy07nRGOE8ImqAsV0="
            className="rounded-t-xl" alt="pepper dosa" style={{ width: "100%", height: "70%" }} />
          <div className='w-[100%] h-[30%] rounded-b-xl shadow-2xl'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <h1 className='text-base font-bold px-2 capitalize pt-2'>Pepper Masala Dosa: ₹155</h1>
                <p className='px-2 text-xs capitalize font-medium'>Extra Spice</p>
              </div>
              <span className='flex w-12 mr-4 text-white rounded justify-center bg-[#24963F] items-center '>4.0 <AiFillStar size={15} className="ml-1" /></span>
            </div>
            <button className='border border-black rounded-lg px-2 py-1 mt-2 ml-2 font-semibold'>Add To Cart</button>
          </div>
        </main>
        <main className='w-[100%]  px-4 hover:scale-105 duration-300  h-[350px]'>
          <img src="https://media.istockphoto.com/photos/gluten-free-red-lentil-panckes-picture-id1313231495?k=20&m=1313231495&s=612x612&w=0&h=D8n2o9uLd6_lMcrKUmH5MUYXibSHgLCOBHlgjBqQm64="
            className="rounded-t-xl" alt="pepper dosa" style={{ width: "100%", height: "70%" }} />
          <div className='w-[100%] h-[30%] rounded-b-xl shadow-2xl'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <h1 className='text-base font-bold px-2 capitalize pt-2'>sweet egg cheese Dosa: ₹145</h1>
                <p className='px-2 text-xs capitalize font-medium'>Normal sweet</p>
              </div>
              <span className='flex w-12 mr-4 text-white rounded justify-center bg-[#24963F] items-center '>4.0 <AiFillStar size={15} className="ml-1" /></span>
            </div>
            <button className='border border-black rounded-lg px-2 py-1 mt-2 ml-2 font-semibold'>Add To Cart</button>
          </div>
        </main>
        <main className='w-[100%]  px-4 hover:scale-105 duration-300  h-[350px]'>
          <img src="https://media.istockphoto.com/photos/palak-dosa-a-crispy-spinach-pancake-picture-id469051777?k=20&m=469051777&s=612x612&w=0&h=trc6JZnyACdzHKeJlE7HxOlt7jRnmvws8lpywV730po="
            className="rounded-t-xl" alt="pepper dosa" style={{ width: "100%", height: "70%" }} />
          <div className='w-[100%] h-[30%] rounded-b-xl shadow-2xl'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <h1 className='text-base font-bold px-2 capitalize pt-2'>coriander flavored Dosa: ₹105</h1>
                <p className='px-2 text-xs capitalize font-medium'>Extra Spice</p>
              </div>
              <span className='flex w-12 mr-4 text-white rounded justify-center bg-[#24963F] items-center '>4.2 <AiFillStar size={15} className="ml-1" /></span>
            </div>
            <button className='border border-black rounded-lg px-2 py-1 mt-2 ml-2 font-semibold'>Add To Cart</button>
          </div>
        </main>
        <main className='w-[100%]  px-4 hover:scale-105 duration-300  h-[350px]'>
          <img src="https://media.istockphoto.com/photos/masala-dosa-from-south-india-picture-id525514195?k=20&m=525514195&s=612x612&w=0&h=Y15fdztUjkSac_Vy_HCsleh5Ctm0ZlicFBwj2oK_sDM="
            className="rounded-t-xl" alt="pepper dosa" style={{ width: "100%", height: "70%" }} />
          <div className='w-[100%] h-[30%] rounded-b-xl shadow-2xl'>
            <div className='flex justify-between items-center'>
              <div className=''>
                <h1 className='text-base font-bold px-2 capitalize pt-2'>full stuffed masala Dosa: ₹120</h1>
                <p className='px-2 text-xs capitalize font-medium'>normal spice</p>
              </div>
              <span className='flex w-12 mr-4 text-white rounded justify-center bg-[#f5901d] items-center '>3.9 <AiFillStar size={15} className="ml-1" /></span>
            </div>
            <button className='border border-black rounded-lg px-2 py-1 mt-2 ml-2 font-semibold'>Add To Cart</button>
          </div>
        </main>
      </div>
    </section>
  )
}

export default Specials;