import React, { useState } from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import menu from '../images/menu.png';
import bgImage from '../images/background.png';
import shirt1 from '../images/shirt1.png';
import shirt2 from '../images/shirt2.png';
import hoodie1 from '../images/h1.png';
import pant1 from '../images/pant1.png';
import pant2 from '../images/pant2.png';
import pant3 from '../images/pant3.png';
import WomensImage from '../images/Womens.webp';
import emailImage from '../images/email.png'
import locationImage from '../images/location.png';
import phoneImage from '../images/phone.png'
import image1 from '../images/img1.png';
import image2 from '../images/img2.png';
import image3 from '../images/img3.png';
import kidsBanner from '../images/Kidsbanner.webp';
import userIcon from '../images/user.png';
import cartIcon from '../images/cart.png';
import addIcon from '../images/add1.webp';
import k1Image from '../images/k1.webp';
import k2Image from '../images/k2.webp';
import k3Image from '../images/k3.webp';
import k4Image from '../images/k4.webp';
import l1Image from '../images/l1.webp';
import l2Image from '../images/l2.webp';
import l3Image from '../images/l3.webp';
import l4Image from '../images/l4.webp';




// import checkoutIcon from '../images/checkout.png';





function MyApp() {
  const [products] = useState([
    { id: 1, name: 'Plain Shirt', image: shirt1, price: 1000 },
    { id: 2, name: 'Cardigan Shirt', image: shirt2, price: 1200 },
    { id: 3, name: 'Color Block Hoodie', image: hoodie1, price: 750 },
    { id: 4, name: 'Jeans', image: pant1, price: 1000 },
    
    // { id: 6, name: 'kids', image: ki, price: 800 },
    
  ]);

  const [otherProducts] = useState([
    { id: 7, name: 't-shirt', image: k1Image, price: 800 },
    { id: 8, name: 'shirt', image: k2Image, price: 800 },
    { id: 9, name: 'shirt', image: k3Image, price: 800 },
    { id: 10, name: 'kids', image: k4Image, price: 800 },
    { id: 11, name: 'Tops', image: l1Image, price: 2000 },
    { id: 12, name: 'NikeShoes', image: l2Image, price: 2500 },
    { id: 13, name: 'shirt', image: l3Image, price: 1999 },
    { id: 14, name: 'sandals', image: l4Image, price: 999 },





   
  ]);

  const addToCart = (productName, price) => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const newItem = { name: productName, price: price };
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    console.log(`Adding ${productName} to cart with price ${price}`);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-md" id="navbar">
        <a className="navbar-brand" href="#" id="logo">
          <img src={logo} alt="" width="30px" style={{ marginBottom: '10px', marginRight: '10px' }} />
        </a>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product-cards">Men</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product-cards1">Women</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product-cards2">Kids</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact Us</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/chat"}>chat</Link>
            </li>
          </ul>
          <div className="navbar-nav ml-auto">
            <Link to="/signup" className="nav-item nav-link">
              <img src={userIcon} width="20px" alt="User Icon" />
            </Link>
            <Link to="/addtocart" className="nav-item nav-link">
              <img src={cartIcon} width="20px" alt="Cart Icon" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section className="home" id="home">
        <div className="content">
          <h3>The Biggest Sale</h3>
          <h2>Category <span className="changecontent"></span></h2>
          <p>Discover fashion-forward apparel and accessories at our boutique store. <br /> Elevate your style with our curated selection of high-quality garments. Visit us today!</p>
          <h5>50% OFF</h5>
          <a href="#product-cards" className="btn">Shop Now</a>
        </div>
        <div className="img">
          <img src={bgImage} alt="" />
        </div>
      </section>

      {/* Product Cards */}
      <div className="container" id="product-cards" style={{ marginTop: '50px' }}>
        <h1 className="text-center">PRODUCT</h1>
        <div className="row" style={{ marginTop: '50px' }}>
          {products.map((product) => (
            <div className="col-md-3 py-3 py-md-0" key={product.id}>
              <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <h3 className="text-center">{product.name}</h3>
                  <div className="star text-center">
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                  </div>
                  <div className='imagee'>
                    <img src={addIcon} width="20px" height="20px" alt="Add to Cart Icon" onClick={() => addToCart(product.name, product.price)} />
                    <h5>{product.price}/-</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row" style={{ marginTop: '50px' }}>
          {otherProducts.map((product) => (
            <div className="col-md-3 py-3 py-md-0" key={product.id}>
              <div className="card">
                <img src={product.image} alt="" />
                <div className="card-body">
                  <h3 className="text-center">{product.name}</h3>
                  <div className="star text-center">
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                    <i className="bx bxs-star checked"></i>
                  </div>
                  <div className='imagee'>
                    <img src={addIcon} width="20px" height="20px" alt="Add to Cart Icon" onClick={() => addToCart(product.name, product.price)} />
                    <h5>{product.price}/-</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    

      {/* End of Product Cards */}

      {/* Banner */}
      <div className="container">
        <section className="banner" id="banner">
          <div className="banner-content">
            <h1>Special <span>Collection</span></h1>
            <p>"Indulge in elegance at our women's boutique. From timeless classics <br /> to contemporary chic, find the perfect ensemble for every occasion. Visit us now!</p>
            <h5>UPTO 50% OFF</h5>
            <a href="#" className="btn">Shop Now</a>
          </div>
          <div className="img">
            <img src={WomensImage} alt="Special Collection" />
          </div>
        </section>
      </div>
      {/* End of Banner */}
      
      {/* End of Other Product Cards */}

      {/* Banner2 */}
      <div className="container">
        <section className="banner2" id="banner2">
          <div className="banner2-content">
            <h1>Kids <span>Wear</span></h1>
            <h2>Product <span className="bannerchangecontent"></span></h2>
            <h3>UPTO 50% OFF</h3>
            <p>"Experience whimsical fashion for your little ones at our kid's <br/> From playful prints to comfortable essentials, discover adorable outfits for every adventure. Visit us today!"</p>
            <a href="#" className="btn">Shop Now</a>
          </div>
          <div className="img">
            <img src={kidsBanner} alt="Kids Wear" />
          </div>
        </section>
      </div>
      {/* End of Banner2 */}
     
      {/* End of About Us */}

      {/* Contact Us */}
      <div class="container" id="contact">
        <h2>CONTACT US</h2>
        <hr/>
        <div class="row">
          <div class="col-md-3 py-3 py-md-0">
          <div className="d-flex align-items-center"/>

            <img src={locationImage} width="60px"/>
            <p>India Telangana Warangal
              <br/>Chowrastha Hanamakonda
            </p>
          </div>

          <div class="col-md-3 py-3 py-md-0">
            
            <img src={phoneImage} width="60px"/>
            <p>+91 9700388325
           <br/>+91 9618190870
            </p>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <img src={emailImage}  width="60px"/>
            <p>example@gmail.com
            <br/>contact@gmail.com
            </p>
          </div>
        </div> 
<hr/>
        <div class="row">

          <div class="col-md-6 py-3 py-md-0">

            <div class="form-group">
              <input type="text" class="form-control" id="usr" placeholder="Your Name"/>
            </div>
            <div class="form-group">
              <input type="phone" class="form-control" id="phn" placeholder="Your Phone Number"/>
            </div>
          </div>

          <div class="col-md-6 py-3 py-md-0">

            <div class="form-group">
              <input type="email" class="form-control" id="eml" placeholder="Your Email"/>
            </div>
            <div class="form-group">
              <input type="subject" class="form-control" id="sbj" placeholder="Subject"/>
            </div>
          </div>

        </div>
        <div class="form-group">
          <textarea class="form-control" rows="5" id="comment" placeholder="Type your Message"></textarea>

        </div>
        <div id="message"><button>Send Message</button></div>
        
      </div>


      {/* End of Contact Us */}

    </div>
  );
}

export default MyApp;

