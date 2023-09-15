import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "../../../public/images/dog.jpg";
import dog from "../../../public/images/card-dog.jpg";
import cat from "../../../public/images/card-cat.jpg";
import bird from "../../../public/images/card-bird.jpg";
import productdog from "../../../public/images/product-dog.jpg";
import productcat from "../../../public/images/product-cat.jpg";
import productpug from "../../../public/images/product-pug.jpg";
import productparrot from "../../../public/images/product-parrot.jpg";
import productrabbit from "../../../public/images/product-rabbit.jpg";
import producthamster from "../../../public/images/product-hamster.jpg";
import allpet from "../../../public/images/allpet.jpg";
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";

const Home = () => {
  return (
    <>
      {/* home section start  */}
      <section
        className="home"
        style={{
          backgroundImage: `url(${bg.src})`,
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="content">
          <h3>
            Every Pet <span> Lover's </span> Dream
          </h3>
          <p>
            Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd.
            Kasd clita ea justo est sed kasd erat clita sea
          </p>
          <Link href={'/'} className="btn">
            Enquire Now
          </Link>
        </div>
      </section>
      {/* home section end */}

      {/* pet Section Start */}
      <section className="pet" id="pet">
        <h1 className="heading">
          {" "}
          Our <span>Pet's</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <Image src={dog} className="img" alt="dog" />
            <h3>Dogs</h3>
            <p>
              Our goal is to find a puppy as enjoyable as owning one.Everyone
              should have a puppy in their lives
            </p>
            <Link href={'/'} className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Image src={cat} className="img" alt="cat" />
            <h3>Cats</h3>
            <p>
              Cats are hugs in size, rich colouring, double boned, with perfect
              look. Buy a cat and add a little giggle to your life.
            </p>
            <Link href={'/'} className="btn">
              read more
            </Link>
          </div>

          <div className="box">
            <Image src={bird} className="img" alt="bird" />
            <h3>Birds</h3>
            <p>
              Let the morning start with their beautiful Chiroing.We offer all
              Sizes and types of exotic birds for sale, which surely will make
              your life incredible
            </p>
            <Link href={'/'} className="btn">
              read more
            </Link>
          </div>
        </div>
      </section>
      {/* pet section end */}

      {/* product section Start */}
      <section className="products" >
        <h1 className="heading">
          our <span>products</span>
        </h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <Image
                src={productdog}
                className="product-img"
                alt="product-dog"
              />
              <h3>Beagle Puppies</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>

            <div className="swiper-slide box">
              <Image
                src={productcat}
                className="product-img"
                alt="product-cat"
              />
              <h3>Persian Cat</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>

            <div className="swiper-slide box">
              <Image
                src={productpug}
                className="product-img"
                alt="product-pug"
              />
              <h3>Pug Puppies</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>
          </div>
        </div>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <Image
                src={productparrot}
                className="product-img"
                alt="product-pug"
              />
              <h3>Parrot</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>
            <div className="swiper-slide box">
              <Image
                src={productrabbit}
                className="product-img"
                alt="product-pug"
              />
              <h3>Rabbit</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>
            <div className="swiper-slide box">
              <Image
                src={producthamster}
                className="product-img"
                alt="product-pug"
              />
              <h3>Rabbit</h3>
              <div className="stars">
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsFillStarFill className="product-icon" />
                <BsStarHalf className="product-icon" />
              </div>
              <Link href={'/'} className="btn">
              Send Enquriey
            </Link>
            </div>
          </div>
        </div>
        
      </section>
      {/* product end  */}

      {/* About section start */}
          <section className="about" id="about">
             <h1 className="heading">
               our <span>About Us</span>
             </h1>
              <div className="about-content">
                 <div className="about-img">
                    <Image src={allpet} className="allpet" alt="pet" />
                  </div>
                  <div className="content">
                     <h2>About Us</h2>
                     <p>We, Pet's Corner Pet Store, situated at Malad West, Mumbai, Maharashtra are recognised as a home to a massive range of globally renowned pets like Cats, Dogs, Birds and Rabbits. Our Aim is to Provide a User Friendly, Fun and Relaxing Shopping Experience while giving the Best Service Available for our Customers and their Pet. We also provide the highest and assured quality of different breeds of pets. We also Assist in Buying Puppies and Kittens of Pure Breed. We strive to bring joy to you and your pet on a daily basis</p>
                     <Link href={'/'} className="btn">More</Link>
                  </div>
              </div>
          </section>

      {/* About section end */}

    </>
  );
};

export default Home;
