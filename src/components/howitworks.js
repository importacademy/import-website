import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function HowItWorks() {
  return (
    <>
      <div>
        <section className="page-title">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="breadcrumbs-wrap">
                  <h1 className="breadcrumb-title pt-5">How it Works</h1>
                </div>
                <div className="mt-5">
                  <p>
                    Import's mission is to provide quality Computer Science
                    education, as well as to offer opportunities for individuals
                    to share their knowledge and help others across the globe.
                    Here, on this page, you can learn how our process works.
                  </p>
                </div>
              </div>
            </div>
            <div className="donate-button">
              <givebutter-widget id="pAdEkg"></givebutter-widget>
            </div>
          </div>
        </section>
        {/* ============================ Page Title End ================================== */}
        {/* ========================== Curriculum Section =============================== */}
        <section className="pt-100 section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex mb-0">
                  <h2>Curriculum</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  <div className="list_facts">
                    <p>
                      The curriculum was developed by Andre Prakash in
                      collaboration with other members of the board as well as
                      some lesson writers.
                    </p>
                    <p>
                      To properly construct the curriculum, Andre conducted
                      research covering critical thinking in an online
                      atmosphere while working with a professor from a Top 50
                      University in the USA.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img">
                  <img
                    src="assets/img/hw_curriculum.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Curriculum Section =============================== */}
        {/* ========================== Lessons Section =============================== */}
        <section className="bg_lightorange section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex mb-0">
                  <h2>Lessons</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img">
                  <img
                    src="assets/img/hw_lessons.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  <div className="list_facts">
                    <p>
                      The lessons on Import are written by experts in their
                      field. These could include either people working in their
                      respective speciality, or professional educators. The
                      lessons are written using the curriculum as an outline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Lessons Section =============================== */}
        {/* ========================== Online Tutoring Section =============================== */}
        <section className="section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex mb-0">
                  <h2>Online Tutoring</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  <div className="list_facts">
                    <p>
                      Import offers online tutoring to those that would like it.
                      Individuals can choose to be tutored in an Import offered
                      course, or something else. Anyone can apply to become an
                      online tutor. If they pass the screening exam, then they
                      are verified and can begin helping others.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img">
                  <img
                    src="assets/img/hw_online_tutoring.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Online Tutoring Section =============================== */}
        {/* ========================== In-Person Instruction Section =============================== */}
        <section className="bg_lightorange section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex mb-0">
                  <h2>In-Person Instruction</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img">
                  <img
                    src="assets/img/hw_inperson_instruction.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  <div className="list_facts">
                    <p>
                      Import offers In-Person Instruction to libraries and
                      schools that may want it. This instruction will follow an
                      Import authorized curriculum.
                    </p>
                    <p>
                      To become an In-Person Instructor, individuals must first
                      complete an initial screening exam. They must then do a
                      live skills interview, where they will be asked a series
                      of questions relating to Computer Science. After that,
                      they must complete a regular interview to see if they are
                      fit for the platform.
                    </p>
                    <p>
                      In-Person Instructors will be assigned to visit
                      communities in their region based on availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== In-Person Instruction Section =============================== */}
        {/* ============================ Featured Instructor Start ================================== */}
        <section className="bg-light" style={{ display: "none" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="sec-heading center">
                  <p>Meet Instructors</p>
                  <h2>
                    <span className="theme-cl">Top &amp; Famous</span>{" "}
                    Instructor in Your City
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="four_slide-dots articles arrow_middle">
                  {/* Single Slide */}
                  <div className="singles_items">
                    <div className="instructor_wrap">
                      <div className="instructor_thumb">
                        <a href="instructor-detail.html">
                          <img
                            src="assets/img/user-1.jpg"
                            className="img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="instructor_caption">
                        <h4>
                          <a href="instructor-detail.html">Daniel Diwansker</a>
                        </h4>
                        <span>Web Designer</span>
                        <ul>
                          <li>
                            <a href="#" className="cl-fb">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-twitter">
                              <i className="ti-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-linked">
                              <i className="ti-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Single Slide */}
                  <div className="singles_items">
                    <div className="instructor_wrap">
                      <div className="instructor_thumb">
                        <a href="instructor-detail.html">
                          <img
                            src="assets/img/user-2.jpg"
                            className="img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="instructor_caption">
                        <h4>
                          <a href="instructor-detail.html">Shilpa Singh</a>
                        </h4>
                        <span>Team Manager</span>
                        <ul>
                          <li>
                            <a href="#" className="cl-fb">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-twitter">
                              <i className="ti-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-linked">
                              <i className="ti-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Single Slide */}
                  <div className="singles_items">
                    <div className="instructor_wrap">
                      <div className="instructor_thumb">
                        <a href="instructor-detail.html">
                          <img
                            src="assets/img/user-3.jpg"
                            className="img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="instructor_caption">
                        <h4>
                          <a href="instructor-detail.html">Adam Wistom</a>
                        </h4>
                        <span>Sales Manager</span>
                        <ul>
                          <li>
                            <a href="#" className="cl-fb">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-twitter">
                              <i className="ti-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-linked">
                              <i className="ti-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Single Slide */}
                  <div className="singles_items">
                    <div className="instructor_wrap">
                      <div className="instructor_thumb">
                        <a href="instructor-detail.html">
                          <img
                            src="assets/img/user-4.jpg"
                            className="img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="instructor_caption">
                        <h4>
                          <a href="instructor-detail.html">Ragini Singh</a>
                        </h4>
                        <span>Business Executing</span>
                        <ul>
                          <li>
                            <a href="#" className="cl-fb">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-twitter">
                              <i className="ti-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-linked">
                              <i className="ti-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Single Slide */}
                  <div className="singles_items">
                    <div className="instructor_wrap">
                      <div className="instructor_thumb">
                        <a href="instructor-detail.html">
                          <img
                            src="assets/img/user-5.jpg"
                            className="img-fluid"
                            alt
                          />
                        </a>
                      </div>
                      <div className="instructor_caption">
                        <h4>
                          <a href="instructor-detail.html">Daniel Wilson</a>
                        </h4>
                        <span>HR Manager</span>
                        <ul>
                          <li>
                            <a href="#" className="cl-fb">
                              <i className="ti-facebook" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-twitter">
                              <i className="ti-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="#" className="cl-linked">
                              <i className="ti-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ============================ Featured Instructor End ================================== */}
        {/* ============================ Testimonial Start ================================== */}
        <section
          style={{
            background: "url(assets/img/testimonial.png)",
            display: "none",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-12">
                <div className="sec-heading center">
                  <p>What People Say?</p>
                  <h2>
                    <span className="theme-cl">Reviews</span> By Our Success
                    &amp; Top Students
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="testimonials_style"
                  className="slick-carousel-3 arrow_middle"
                >
                  <div className="testimonial-detail">
                    <div className="client-detail-box">
                      <div className="pic">
                        <img src="assets/img/user-1.jpg" alt />
                      </div>
                      <div className="client-detail">
                        <h3 className="testimonial-title">Adam Alloriam</h3>
                        <span className="post">Web Developer</span>
                      </div>
                    </div>
                    <p className="description">
                      " Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Autem commodi eligendi facilis itaque minus non
                      odio, quaerat ullam eligendi facilis itaque minus non
                      odio, quaerat ullam unde unde voluptatum Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Autem commodi
                      eligendi. "
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    <div className="client-detail-box">
                      <div className="pic">
                        <img src="assets/img/user-2.jpg" alt />
                      </div>
                      <div className="client-detail">
                        <h3 className="testimonial-title">Illa Millia</h3>
                        <span className="post">Project Manager</span>
                      </div>
                    </div>
                    <p className="description">
                      " Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Autem commodi eligendi facilis itaque minus non
                      odio, quaerat ullam unde voluptatum eligendi facilis
                      itaque minus non odio, quaerat ullam unde Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit. Autem
                      commodi eligendi."
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    <div className="client-detail-box">
                      <div className="pic">
                        <img src="assets/img/user-3.jpg" alt />
                      </div>
                      <div className="client-detail">
                        <h3 className="testimonial-title">Rout Millance</h3>
                        <span className="post">Web Designer</span>
                      </div>
                    </div>
                    <p className="description">
                      " Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Autem commodi eligendi facilis itaque minus non
                      odio, quaerat ullam unde voluptatum Lorem ipsum dolor sit
                      amet, consectetur adipisicing elit. Autem commodi
                      eligendi."
                    </p>
                  </div>
                  <div className="testimonial-detail">
                    <div className="client-detail-box">
                      <div className="pic">
                        <img src="assets/img/user-4.jpg" alt />
                      </div>
                      <div className="client-detail">
                        <h3 className="testimonial-title">williamson</h3>
                        <span className="post">Web Developer</span>
                      </div>
                    </div>
                    <p className="description">
                      " Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit. Autem commodi eligendi facilis itaque minus non
                      odio, quaerat ullam unde voluptatum eligendi facilis
                      itaque minus non odio, quaerat ullam unde ? "
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export { HowItWorks };
