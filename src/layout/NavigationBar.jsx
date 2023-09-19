import React, { Component, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Nav, Navbar, NavLink } from "react-bootstrap";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";
// import $ from "jquery";
const NavigationBar = () => {
  let homeIsActive = "nav-item";
  let aboutusIsActive = "nav-item";
  let howIsActive = "nav-item";
  let contactIsActive = "nav-item";

  if (window.location.pathname.includes("home"))
    homeIsActive += " active";
  else if (window.location.pathname.includes("about-us"))
    aboutusIsActive += " active";
  else if (window.location.pathname.includes("how-it-works"))
    howIsActive += " active";
  else if (window.location.pathname.includes("contact"))
    contactIsActive += " active";


  return (
    <div className="header header-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="https://import.academy"><img src="assets/img/import_mascot_head.png" border={0} height={70} /></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={homeIsActive}>
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className={aboutusIsActive}>
                <a className="nav-link" href="/about-us">About Us</a>
              </li>
              <li className={howIsActive}>
                <a className="nav-link" href="/how-it-works">How it Works</a>
              </li>
              <li className={contactIsActive}>
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
            {/* <form className="form-inline">
          <a href="tel:+14151234563"><button className="btn btn-theme" type="button">+1(415) 123-4563</button></a>
        </form> */}
          </div>
        </nav>
      </div>
    </div>
    // <nav className="navbar navbar-expand-xl fixed-top">
    //   <div className="container-fluid">
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon" />
    //     </button>
    //     <a className="navbar-brand" href="#">
    //       <img src={logo} border={0} className="desktop_logo" />
    //       {/* <img src="assets/img/hellalitlogo_sm.png" border="0" class="mobile_logo"/> */}
    //     </a>
    //     <div className="collapse navbar-collapse" id="navbarToggler">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <a className={dispensariesIsActive} href="/dispensaries">
    //             Dispensaries
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className={deliveriesIsActive} href="/deliveries">
    //             Deliveries
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className={brandsIsActive} href="/brands">
    //             Brands
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="/deals" className={dealsIsActive}>
    //             Deals
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="/blog" className={blogIsActive}>
    //             Blog
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a href="/products" className={productsIsActive}>
    //             Products
    //           </a>
    //         </li>
    //         <li className="nav-item">
    //           <a className={mapIsActive} href="/map">
    //             Map
    //           </a>
    //         </li>
    //       </ul>

    //     </div>
    //     <div className="header_icons header_location_div">
    //       <span className="header_all_icon crsr_pntr"><i className="fa-solid fa-location-dot header_location_icon" onClick={locationvisible} title="Location" /></span>
    //       <div className="header_locdiv" style={{ display: locationvisibleflag ? 'block' : 'none' }}>
    //         <ThingsContext.Provider value={userLoc}>
    //           <div className="header_location_search">
    //             <form className="search_cus d-flex  header_location" onSubmit={handleSubmit}>
    //               <div className="d-flex header-location" onSubmit={handleSubmit}>
    //                 <LoadScript googleMapsApiKey={api} libraries={["places"]}>
    //                   <Autocomplete onLoad={loadAuto} onPlaceChanged={onPlaceChangedAuto}>
    //                     <input
    //                       id="userLocation"
    //                       className="form-control locationSearchBox shadow-none input-group"
    //                       type="text"
    //                       placeholder="Search location"
    //                       defaultValue={userLoc}
    //                     />
    //                   </Autocomplete>
    //                 </LoadScript>
    //                 {/* <div className="header_icons header_location_div"><span className="header_all_icon crsr_pntr"> */}
    //                 <button
    //                   title="Get My Current Location"
    //                   onClick={getCurrentLocation}
    //                   className="btn border-0"
    //                   type="button"
    //                 >
    //                   {/* <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> */}

    //                 </button>
    //                 {/* <i className="fa-solid fa-location-dot header_location_icon"></i></span>   */}
    //                 {/* </div> */}
    //               </div>
    //             </form>
    //           </div>
    //         </ThingsContext.Provider>
    //         {/* <GeoLocation userLoc={userLoc} /> */}
    //         {/* <div className="header_location_search">
    //           <form className="d-flex header_location" role="search">
    //             <div className="input-group">
    //               <input type="text" className="form-control" defaultValue="Oakland, CA, USA" aria-label="Username" aria-describedby="basic-addon1" />

    //             </div>
    //           </form>
    //         </div> */}
    //       </div>
    //     </div>
    //     <div className="header_icons header_myprofile_div">
    //       <span className="header_all_icon crsr_pntr"><i className="fa-solid fa-circle-user header_myprofile_icon" title="Profile" onClick={profilevisible} /></span>
    //       <div className="header_myprofdiv" style={{ display: profilevisibleflag ? 'block' : 'none' }}>
    //         <div className="headerprofile_div">
    //           <ul>
    //             <li>
    //               <a href="/login">Login</a>
    //             </li>
    //             <li>
    //               <a href="/signup">Signup</a>
    //             </li>
    //             <li>
    //               <a href="/profile">My Profile</a>
    //             </li>
    //             <li>
    //               <a href="/coupon">Coupon(s)</a>
    //             </li>
    //             <li>
    //               <a href="/checkout">Checkout</a>
    //             </li>
    //             <li>
    //               <a href="/orderHistory">Your Order(s)</a>
    //             </li>
    //             <li>
    //               <a href="/contact">Contact</a>
    //             </li>
    //             <li>
    //               <a onClick={() => {
    //                 logout()
    //               }}>Logout</a>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="header_icons header_wishlist_div">
    //       <span className="header_all_icon crsr_pntr"><a href="/wishlist"><i className="fa-solid fa-heart" title="Wishlist" /></a></span>
    //     </div>

    //     <div class="header_icons header_shopping_div">
    //       <span class="header_all_icon active crsr_pntr"><a href="/cartlist"><i class="fa-solid fa-cart-shopping" title="Cart"></i></a></span>
    //       <span class="tp-header-action-badge">{cartlist}</span>
    //     </div>
    //     <div className="header_icons header_notify_div">
    //       <span className="header_all_icon crsr_pntr"><i className="fa-solid fa-bell header_myprofile_icon" title="Profile" onClick={notifyvisible} /></span>
    //       <div className="header_myprofdiv" style={{ display: notifyvisibleflag ? 'block' : 'none' }}>
    //         <div className="headerprofile_div" style={{ width: '310px' }}>
    //           <ul >
    //             {notification.map((row) => {
    //               return (
    //                 <li style={{ listStyleType: 'disc' }}>
    //                   {row.message}
    //                 </li>
    //               )
    //             })}

    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

  );
};


export default NavigationBar;
