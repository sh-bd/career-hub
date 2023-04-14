import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-black mt-5'>
      <div className='footer-container'>
        <div className='grid grid-cols-2 text-gray-400 md:grid-cols-6 pt-10 md:pt-25'>
          <div className='col-span-2 flex flex-col p-5 md:p-10'>
            <p className='font-bold text-lg'>Chakri Khujun</p>
            <p className='my-2 text-base'>The best job searching platform in the world.</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Company</p>
            <p className='my-1 text-base'>About Us</p>
            <p className='my-1 text-base'>Work</p>
            <p className='my-1 text-base'>Latest News</p>
            <p className='my-1 text-base'>Careers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Product</p>
            <p className='my-1 text-base'>Prototype</p>
            <p className='my-1 text-base'>Plans & Pricing</p>
            <p className='my-1 text-base'>Customers</p>
            <p className='my-1 text-base'>Integrations</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Support</p>
            <p className='my-1 text-base'>Help Desk</p>
            <p className='my-1 text-base'>Sales</p>
            <p className='my-1 text-base'>Become a Partner</p>
            <p className='my-1 text-base'>Developers</p>
          </div>
          <div className='col-span-1 flex flex-col p-3 md:p-5'>
            <p className='mb-1 font-bold'>Contact</p>
            <p className='my-1 text-base'>524 Broadway , NYC</p>
            <p className='my-1 text-base'>+1 777 - 978 - 5570</p>
          </div>
        </div>
        <div className="border-t border-gray-800 w-[95%] mx-auto"></div>
        <div className='text-gray-300 p-5 md:p-5 justify-between items-center'>
          <p className='text-base '> &copy; 2023 <span className='text-red-400'><Link to={'/'}>Chakri Khujun</Link></span>. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;