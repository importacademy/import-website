import React from "react";
// import logo from "../assets/images/hella-lit-logo.png";

function Footer() {
  return (
    <footer class="light-footer">
      <div>
        <div class="container">
          <div class="row">

            <div class="col-lg-3 col-md-3">
              <div class="footer-widget">
                <img src="assets/img/import_mascot_head.png" class="img-footer mb-0" alt="" />

              </div>
            </div>
            <div class="col-lg-2 col-md-3">
              <div class="footer-widget">
                <ul class="footer-menu">
                  <li class="active"><a href="/home">Home</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-3">
              <div class="footer-widget">
                <ul class="footer-menu">
                  <li><a href="/about-us">About Us</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-3">
              <div class="footer-widget">
                <ul class="footer-menu">
                  <li><a href="/how-it-works">How it Works</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-2 col-md-3">
              <div class="footer-widget">
                <ul class="footer-menu">
                  <li><a href="/contact">Contact</a></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="row align-items-center">

            <div class="col-lg-12 col-md-12">
              <p class="mb-0 text-center">© 2023 Import</p> 
            </div>

            <div class="footer-socials">
              <a href="https://twitter.com/importeducation" target="_blank"><img src="../assets/img/twitter_icon.png" width="50px"/></a>
              <a href="https://discord.gg/Pq6W6zSE2v" target="_blank"><img src="../assets/img/discord.png" width="50px"/></a>
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
