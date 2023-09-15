import React, { useEffect, useState } from 'react'
import { PiDogLight } from "react-icons/pi";
import { BiSolidDog, BiSolidUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  
  const [isSearchActive, setSearchActive] = useState(false);
  const [isUserActive, setUserActive] = useState(false);


  const toggleSearch = () => {
    setSearchActive(!isSearchActive);
    setUserActive(false);
  };
  const toggleUser = () => {
    setUserActive(!isUserActive);
    setSearchActive(false);
  };
  




  return (
      <>
         <header className='header'>
           <Link href={'/'} className='logo'><BiSolidDog className='logo-icon' />Pet Shop </Link>
           
           <nav className='navbar'> 
                <Link  href={'/'} className='a'>home</Link>
                <Link  href={'/'} className='a'>Pet</Link>
                <Link  href={'/'} className='a'>Products</Link>
                <Link  href={'/'} className='a'>About Us</Link>
           </nav>

           <div className='icons'>
             <div onClick={toggleSearch}><BsSearch /></div>
             <div onClick={toggleUser}><BiSolidUser /></div>
           </div>

           {/* <!-- search-btn --> */}
         <form  className={` ${isSearchActive ? ' active' : 'search-form'}`}>
            <input type="search"  placeholder="Search here...." />
            <label htmlFor="search-box" ><BsSearch /></label>
         </form>

         {/* login-register */}
         <form  className={` ${isUserActive ? 'login-active' : ' login-form'}`}>
            <h3>Log In or Register for a New Account</h3>
            <p>
               With an account you can check out faster, view your online order
              history and access your shopping bag or saved items from any device.
            </p>
            <div className='login-reg-btn'>
            <Link href={'/LogIn'} className='btn'>Log In</Link>
            <Link href={"/Sign"} className='btn'>Register</Link>
            </div>
         </form>

         </header>
      </>
  )
}

export default Header;