import React from 'react'

const navbar = () => {
  return (
    <div>
      <nav className="bg-gray-100">
        <div className="px-24 mx-auto">
        <div className="flex justify-between"> 
        <div className="flex space-x-4">
          <div>
          <a href="#" className="flex items-center py-3 px-2 text-gray-900">
          <svg className="mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
</svg>

<span className="font-bold"> FlyMart</span>
          </a>
          </div>
          
          
          {/* primary nav */}


          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className=" py-3 px-3 text-gray-500 hover:text-gray-900">Home</a>
            <a href="#" className=" py-3 px-3 text-gray-500 hover:text-gray-900">About Us</a>
            <a href="#" className=" py-3 px-3 text-gray-500 hover:text-gray-900">Our Products</a>
            <a href="#" className=" py-3 px-3 text-gray-500 hover:text-gray-900">Contact Us</a>
          </div>
          </div>


           {/* Secondary Nav */}

          <div className="hidden md:flex items-center space-x-1">
            <a href="" className="py-5 px-3">Login</a>
            <a href="" className="py-5 px-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</a>
          </div>


          {/* mobile button goes here */}
        

          <div className="md:hidden flex items-center">
          hamberger icon
          </div>
          </div>
        </div>
        {/* mobile menue */}
        <div>
        
            
        </div>
      </nav>
    </div>
  )
}

export default navbar
