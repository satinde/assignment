import React from 'react'
import {BiSolidDog} from "react-icons/bi";
import {AiFillFacebook, AiTwotoneMail, AiFillPhone, AiFillTwitterSquare, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";
import {BsArrowRight} from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
  <div className="footer">
    <div className="box-container">
        <div className="box">
            <Link href={'/'} className="logo" ><BiSolidDog className='logo-icon' />Pet Shop </Link>
            <p>
            Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd.
            Kasd clita ea justo est sed kasd erat clita sea                </p>
            <div className="share">
                 <span><AiFillFacebook className='social-icon'/></span>
                <span><AiFillTwitterSquare className='social-icon'/></span>
                <span><AiFillInstagram className='social-icon' /></span>
                <span><AiFillLinkedin className='social-icon' /></span>
            </div>
        </div>

        <div className="box">
            <h3>contact info</h3>
            <Link href={'/'} className="links"><AiFillPhone /> +123-456-789</Link>
            <Link href={'/'} className="links"><AiTwotoneMail /> ramandeep@gmail.com</Link>
            <Link href={'/'} className="links"><MdLocationOn />Amritsar,Punjab</Link>
        </div>

        <div className="box">
            <h3>quick links</h3>
            <Link href={'/'} className="links"><BsArrowRight className='arrow'/> home</Link>
            <Link href={'/'} className="links"><BsArrowRight className='arrow'/> pet</Link>
            <Link href={'/'} className="links"><BsArrowRight className='arrow'/> products</Link>
            <Link href={'/'} className="links"><BsArrowRight className='arrow'/> about us</Link>
        </div>

        <div className="credit">created by <span>mr.web developer</span>  all right reserved</div>
    </div>
 </div>
  )
}

export default Footer;