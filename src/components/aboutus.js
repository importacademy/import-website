import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <div>
        <section className="page-title section_pdng_topbtm">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="breadcrumbs-wrap">
                  <h1 className="breadcrumb-title">About Us</h1>
                </div>
              </div>
            </div>
            <div className="donate-button">
              <givebutter-widget id="pAdEkg"></givebutter-widget>
            </div>
          </div>
        </section>
        {/* ============================ Page Title End ================================== */}
        {/* ========================== About Facts List Section =============================== */}
        <section className="pt-0 section_pdng_topbtm">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  <div className="list_facts">
                    <p>
                      Import is an organization dedicated to bringing Computer
                      Science education and tutoring opportunities to
                      individuals around the globe. Our goal is to bring CompSci
                      curriculum into libraries and homes everywhere.
                    </p>
                    <p>
                       
                    </p>
                    <p>
                      We plan to open our program to the public during June 2024.
                      If you would like to help us reach our goal, please
                      consider donating. Anything, and everything, helps.
                    </p>
                    <p>

                    </p>
                    <p>
                      If you're interested in volunteering, please fill out <a href="https://forms.gle/D3DLKDg28TfdGs3L8">this form</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="donate-form">
                  <givebutter-widget id="paVPBj"></givebutter-widget>
                </div>
                <div className="list_facts_wrap_img">
                  {/* <img src="assets/img/about.png" className="img-fluid" alt /> */}
                  
                </div>
              </div>
              
            </div>
          </div>
          
        </section>
        {/* ========================== About Facts List Section =============================== */}
        {/* ============================ Featured Instructor Start ================================== */}
        
        {/* ============================ Featured Instructor End ================================== */}
        {/* ============================ Testimonial Start ================================== */}
        <section
          style={{
            background: "url(assets/img/testimonial.png)",
            display: "none",
          }}
        >
        </section>
      </div>
    </>
  );
}

export { AboutUs };
