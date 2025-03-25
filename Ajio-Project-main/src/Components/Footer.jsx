import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Footer.css'; // Additional styling

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-3">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 mb-3">
            <h5>Ajio</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Who We Are</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Join Our Team</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Terms & Conditions</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>We Respect Your Privacy</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Fees & Payments</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Returns & Refunds Policy</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Promotions Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 mb-3">
            <h5>Help</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Track Your Order</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Frequently Asked Questions</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Returns</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Cancellations</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Payments</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Customer Care</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>How Do I Redeem My Coupon</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 mb-3">
            <h5>Shop by</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Men</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Women</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Kids</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Indie</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Stores</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>New Arrivals</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Brand Directory</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Home</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Collections</a></li>
            </ul>
          </div>
          <div className="col-sm-6 col-md-3 mb-3">
            <h5>Follow us</h5>
            <ul className="list-unstyled">
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Facebook</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Instagram - AJIOlife</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Instagram - AJIO LUXE</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Twitter</a></li>
              <li><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Pinterest</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row mt-4">
          <div className="col-md-6 mb-3">
            <h5>Payment methods</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Net Banking</a></li>
              <li className="list-inline-item"><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Verified by VISA</a></li>
              <li className="list-inline-item"><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>MasterCard</a></li>
              <li className="list-inline-item"><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Cash on Delivery</a></li>
              <li className="list-inline-item"><a href="#" style={{ cursor: 'pointer', textDecoration:'none',color:'white' }}>Jio Money</a></li>
            </ul>
          </div>
          <div className="col-md-6 text-md-end mb-3">
            <h5>Secure systems</h5>
            <p>SSL 256 BIT Encryption</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
