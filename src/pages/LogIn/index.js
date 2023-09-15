import React, { useState } from 'react'
import bg from "../../../public/images/bg-img-dog.jpg";
import bg2 from '../../../public/images/a.svg';
import Link from "next/link";
import Image from "next/image";
import {BiSolidDog} from "react-icons/bi"
import goggle from "../../../public/images/Social Media/Google.png"
import fb from "../../../public/images/Social Media/FB.png";
import apple from "../../../public/images/Social Media/apple.png";
import insta from "../../../public/images/Social Media/Instagram.png";
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { createUser } from '../../redux/features/userDetailSlice';

const LogIn = () => {
     
  const [users, setUsers] = useState({});

  const dispatch = useDispatch();

  const router = useRouter();
  
  const getUserData = (e) => {
    setUsers({...users, [e.target.name] : e.target.value })    
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(users);
    try {
      await dispatch(createUser(users));
      await router.push("/Dashboard");
    } catch (error) {
      console.error("Error navigating to /dashboard:", error);
    }
  }


  return (
    <>
      <div
        className="signup"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          height: "100vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="signup-righ"
          style={{ backgroundImage: `url(${bg2.src})` }}
        >
          <div className="signup-righ-logo">
            <Link href={"/"} className="logo">
              <BiSolidDog className="logo-icon" />
              Pet Shop{" "}
            </Link>
          </div>
          <div className="signup-righ-para">
            <h1>Log in using</h1>
          </div>
          <div className="social-media">
            <Image src={goggle} className="img" alt='goggle'/>
            <Image src={fb} className="img" alt='fb'/>
            <Image src={apple} className="img" alt='apple'/>
            <Image src={insta} className="img" alt='insta'/>
          </div>

          <div className="signup-righ-para">
            <h1>Log in With</h1>
          </div>
          <form method='post' onSubmit={handleSubmit}>
               <div className='label-input' >
                 <label>Name</label>
                 <input type='text' name='name' placeholder='Enter your name' onChange={getUserData} required/>
               </div>
               <div className='label-input'>
                 <label>Email</label>
                 <input type='email' name='email' placeholder='Enter your Email' onChange={getUserData} required/>
               </div>
              <button type='submit' className='btn'>Log In</button>
            
               <p>By registering an account you agree to our <br/> 
               <span>Terms & Conditions.</span></p>
            </form>
        </div>

        <div
          className="signup-left"
          style={{ backgroundImage: `url(${bg2.src})` }}
        >
          <div className="content">
            <p>Don't have an account?</p>
            <Link href={"/Sign"} className="btn">
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogIn