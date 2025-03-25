import React from 'react';
import { Form, Link, NavLink } from 'react-router-dom';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Navbar.css';


const Navbar = () => {
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand" onClick={handleLogoClick}>
          <img
            className="site-logo"
            src="https://assets.ajio.com/static/img/Ajio-Logo.svg"
            alt="Site Logo"
          />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i></i></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">

          <div className="d-lg-flex d-md-none d-sm-none align-items-center position-absolute mb-5 col" style={{ left: '68%', top: '-5%' }}>
            <div className="d-flex align-items-center gap-3">
              <a className="nav-link" href="/">Sign In / Join AJIO</a>
              <a className="nav-link" href="/">Customer Care</a>
              <div>
                <button className="btn btn-dark">Visit AJIOLUXE</button>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between w-100 mt-4 ms-5 text-center">
            <ul className="navbar-nav d-flex flex-col mb-2 mb-lg-0 m-auto ">
              <li className="nav-item me-3">
                <Link className="nav-link" to="/"></Link>
              </li>
              <div className="dropdown MEN">
                <button data-mdb-button-init
                  data-mdb-ripple-init data-mdb-dropdown-init className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false">
                  <Link className="" to="/men" id="menDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    MEN
                  </Link>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/men/shirts">Shirt's</Link></li>
                  <li><Link className="dropdown-item" to="/men/pants">Pants</Link></li>
                  <li><Link className="dropdown-item" to="/Men/t-shirts">T-Shirts</Link></li>
                </ul>
              </div>
              <div className="dropdown WOMEN">
                <button data-mdb-button-init
                  data-mdb-ripple-init data-mdb-dropdown-init className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link className="nav-link" to="/women" id="menDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    WOMEN
                  </Link>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/women/t-shirts">T-Shirts</Link></li>
                  <li><Link className="dropdown-item" to="/women/kurtas">Kurtas</Link></li>
                  <li><Link className="dropdown-item" to="/women/Sarees">Sarees</Link></li>
                </ul>
              </div>
              <div className="dropdown KIDS">
                <button data-mdb-button-init
                  data-mdb-ripple-init data-mdb-dropdown-init className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link className="nav-link" to="/kids" id="kidsDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    KIDS
                  </Link>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/kids/tops">Tops</Link></li>
                  <li><Link className="dropdown-item" to="/kids/bags">Bags</Link></li>
                  <li><Link className="dropdown-item" to="/kids/jackets">Jackets</Link></li>
                </ul>
              </div>
              <div className="dropdown BEAUTY">
                <button data-mdb-button-init
                  data-mdb-ripple-init data-mdb-dropdown-init className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link className="nav-link" to="/beauty" id="beautyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    BEAUTY
                  </Link>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/beauty/face-wash">Face-Wash</Link></li>
                  <li><Link className="dropdown-item" to="/beauty/perfumes">Perfumes</Link></li>
                  <li><Link className="dropdown-item" to="/beauty/shampoo">Shampoo</Link></li>
                </ul>
              </div>
              <div className="dropdown HOME & KITCHEN text-center">
                <button data-mdb-button-init
                  data-mdb-ripple-init data-mdb-dropdown-init className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link className="nav-link" to="/homeandkitchen" id="beautyDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    HOME & KITCHEN
                  </Link>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><Link className="dropdown-item" to="/homeandkitchen/wall-decor">Wall-Decor</Link></li>
                  <li><Link className="dropdown-item" to="/homeandkitchen/photoframes">Photo-Frames</Link></li>
                  <li><Link className="dropdown-item" to="/homeandkitchen/kitchens">Kitchen</Link></li>
                </ul>
              </div>
            </ul>
            <form className="d-flex align-items-center ms-auto d-lg-flex d-md-none d-sm-none">
              <button className="btn btn-light" type="submit"><CiSearch /></button>
              <input className="form-control" type="search" placeholder="Search AJIO" aria-label="Search" />
            </form>
            <img className="wishlist-icon ms-3 d-lg-inline d-md-none d-sm-none" src="https://assets.ajio.com/static/img/wishlistIcon.svg" alt="Wishlist Icon" />
            <a className="nav-link ms-3 bag-icon d-lg-inline d-md-none d-sm-none" href="/"><MdOutlineShoppingBag style={{ color: 'white' }} /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;