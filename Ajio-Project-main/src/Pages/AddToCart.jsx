// CartPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function CartPage() {
  return (
    <div className="row">
      {/* Cart Items */}
      <div className="col-md-8">
        <h4>My Bag (1 item)</h4>
        <div className="card mb-3 cart-item">
          <div className="row g-0">
            <div className="col-md-3">
              <img src="https://via.placeholder.com/100" className="img-fluid rounded-start" alt="Product" />
            </div>
            <div className="col-md-9">
              <div className="card-body">
                <h5 className="card-title">NIKE - Blazer Mid'77 Vintage High-Top Lace-Up Casual Shoes</h5>
                <p className="card-text">Size: 7 | Qty: 1</p>
                <p className="card-text text-success">Savings: ₹2,558.00</p>
                <p className="card-text text-muted"><small>Original Price: ₹7,995.00</small></p>
                <h5 className="card-text text-primary">Price: ₹5,437.00</h5>
                <Link to="/" className="btn btn-link text-danger">Delete</Link>
                <Link to="/wishlist" className="btn btn-link">Move to Wishlist</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="col-md-4">
        <div className="order-summary">
          <h5>Order Details</h5>
          <p>Bag Total: ₹7,995.00</p>
          <p>Bag Discount: - ₹2,558.00</p>
          <p>Delivery Fee: Free <s>₹99.00</s></p>
          <h5>Order Total: ₹5,437.00</h5>
          <button className="btn btn-proceed w-100 mt-3">PROCEED TO SHIPPING</button>

          <div className="mt-4">
            <h6>Apply Coupon</h6>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Enter coupon code" />
              <button className="btn btn-outline-secondary" type="button">APPLY</button>
            </div>
            <h6>Applicable Coupons</h6>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="coupon" id="coupon1" checked />
              <label className="form-check-label" htmlFor="coupon1">
                Savings: ₹543.70 (FASHION10)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
