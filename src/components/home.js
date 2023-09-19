import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Home() {
  const [products, setProducts] = useState([]);
  return (
    <>
      <div>
        {/* ============================ Hero Banner  Start================================== */}
        <div className="image-cover hero_banner hero-inner-2 shadow rlt">
          <div className="container">
            <div className="hero-caption mb-5 text-center">
              <div align="center">
                <h1 className="big-header-capt cl_2">Import</h1>
                <h3 className>knowledge, opportunity, freedom</h3>
              </div>

              {/* <p>Study any topic, anytime. Explore thousands of courses for the lowest price ever!</p> */}
            </div>
    
          </div>
        </div>

        <div className="donate-button">
          <givebutter-widget id="pAdEkg"></givebutter-widget>
        </div>
 
        {/* ============================ Hero Banner End ================================== */}
        {/* ============================ Trips Facts Start ================================== */}
        <section className="p-0 trips_top section_pdng_topbtm">
          <div className="container">
            <div className="trips_wrap">
              <div className="row m-0">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="trips">
                    <div className="trips_icons">
                      <i className="fa-solid fa-trophy" />
                    </div>
                    <div className="trips_detail">
                      <h4>Expertise</h4>
                      <p>
                        Lessons written by experts and individuals in the field.
                        <br />
                        &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="trips">
                    <div className="trips_icons">
                      <i className="fa-solid fa-brain" />
                    </div>
                    <div className="trips_detail">
                      <h4>Critical Thinking</h4>
                      <p>
                        Curriculum designed with research covering critical
                        thinking in mind. Backed by a USA T50 Professor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="trips none">
                    <div className="trips_icons">
                      <i className="fa-regular fa-handshake" />
                    </div>
                    <div className="trips_detail">
                      <h4>Opportunity</h4>
                      <p>
                        Opportunity to share your knowledge and help others.
                        <br />
                        &nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        {/* ============================ Trips Facts Start ================================== */}
        {/* ========================== About Facts List Section =============================== */}
        <section className="pt-100 section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex">
                  <h2 className>Our Mission</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap">
                  {/* <div class="sec-heading mb-3">
									<h2>Our Mission</h2>
								</div> */}
                  <div className="list_facts">
                    <p>
                      We at Import understand how important Computer Science
                      education is, and how crucial it can be in our modern
                      world. Additionally, we also understand how important it
                      is to be able to share that knowledge to others. That's
                      why Import strives to create free and accessible Computer
                      Science courses, and also provide the opportunity for
                      people to share their knowledge and help others on their
                      journey.
                    </p>
                  </div>
                </div>
                {/* <a href="#" class="btn btn-modern">Know More<span><i class="ti-arrow-right"></i></span></a> */}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="list_facts_wrap_img text-center">
                  <img src="assets/img/mission.png" className="img-fluid" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== About Facts List Section =============================== */}
        {/* ========================== Articles Section =============================== */}
        <section className="min-sec section_pdng_topbtm">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-md-12">
                <div className="sec-heading-flex">
                  <h2 className="pl-2">Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="custom-tab customize-tab tabs_creative">
                  <ul
                    className="nav nav-tabs pb-2 b-0 justify-content-center"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="board-tab"
                        data-toggle="tab"
                        href="#board"
                        role="tab"
                        aria-controls="board"
                        aria-selected="true"
                      >
                        Board of Directors
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="lesson-tab"
                        data-toggle="tab"
                        href="#lesson"
                        role="tab"
                        aria-controls="lesson"
                        aria-selected="false"
                      >
                        Lesson Writers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="volunteers-tab"
                        data-toggle="tab"
                        href="#volunteers"
                        role="tab"
                        aria-controls="volunteers"
                        aria-selected="false"
                      >
                        Volunteers
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      onClick={() => {}}
                      className="tab-pane fade show active"
                      id="board"
                      role="tabpanel"
                      aria-labelledby="board-tab"
                    >
                      <div className="row mt-5">
                        {/* Single Article */}
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div
                            className="articles_grid_style"
                            data-toggle="modal"
                            data-target="#boarddirectors1"
                          >
                            <div className="articles_grid_thumb">
                              <img
                                src="assets/img/member_imgs/anton_prakash.jpg"
                                className="img-fluid"
                                alt
                              />
                            </div>
                            <div className="articles_grid_caption text-center">
                              <h4>Anton Prakash</h4>
                              <div className="articles_grid_author">
                                <h4>CFO / Treasurer</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Article */}
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div
                            className="articles_grid_style"
                            data-toggle="modal"
                            data-target="#boarddirectors2"
                          >
                            <div className="articles_grid_thumb">
                              <img
                                src="assets/img/member_imgs/andre_prakash.jpg"
                                className="img-fluid"
                                alt
                              />
                            </div>
                            <div className="articles_grid_caption text-center">
                              <h4>Andre Prakash</h4>
                              <div className="articles_grid_author">
                                <h4>Founder / Executive Director</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Single Article */}
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div
                            className="articles_grid_style"
                            data-toggle="modal"
                            data-target="#boarddirectors3"
                          >
                            <div className="articles_grid_thumb">
                              <img
                                src="assets/img/member_imgs/steve_knaebel.jpg"
                                className="img-fluid"
                                alt
                              />
                            </div>
                            <div className="articles_grid_caption text-center">
                              <h4>Steve Knaebel </h4>
                              <div className="articles_grid_author">
                                <h4>CAO / Secretary</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="lesson"
                      role="tabpanel"
                      aria-labelledby="lesson-tab"
                    >
                      <p className="text-center mt-5">--Yet to come--</p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="volunteers"
                      role="tabpanel"
                      aria-labelledby="volunteers-tab"
                    >
                      <div className="row mt-5">
                        {/* Single Article */}
                        <div className="col-lg-4 col-md-4 col-sm-12">
                          <div
                            className="articles_grid_style"
                            data-toggle="modal"
                            data-target="#volunteers1"
                          >
                            <div className="articles_grid_thumb">
                              <img
                                src="assets/img/member_imgs/keefe_edgar.png"
                                className="img-fluid"
                                alt
                              />
                            </div>
                            <div className="articles_grid_caption text-center">
                              <h4>Keefe Edgar</h4>
                              <div className="articles_grid_author">
                                <h4>Volunteer</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ========================== Articles Section =============================== */}
        <div>
          {/* Modal 1 */}
          <div
            className="modal fade"
            id="boarddirectors1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="boarddirectors1Label"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fyellow" id="boarddirectors1Label">
                    Board of Directors
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="articles_grid_thumb pt-0">
                    <img
                      src="assets/img/member_imgs/anton_prakash.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="articles_grid_caption text-center">
                    <h4 className="fyellow">Anton Prakash</h4>
                    <div className="articles_grid_author">
                      <h4>CFO / Treasurer</h4>
                    </div>
                  </div>
                  <div className="team_desc">
                    <p></p>
                    <ul>
                      <li>
                        Anton Prakash is Import's Chief Financial Officer.
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 2 */}
          <div
            className="modal fade"
            id="boarddirectors2"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="boarddirectors2Label"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fyellow" id="boarddirectors2Label">
                    Board of Directors
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="articles_grid_thumb pt-0">
                    <img
                      src="assets/img/member_imgs/andre_prakash.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="articles_grid_caption text-center">
                    <h4 className="fyellow">Andre Prakash</h4>
                    <div className="articles_grid_author">
                      <h4>Founder / Executive Director</h4>
                    </div>
                  </div>
                  <div className="team_desc">
                    <p></p>
                    <ul>
                      <li>Andre Prakash is Import's CEO and Founder.</li>
                      <li>
                        Andre is a high school student who has completed
                        internships at tech startups and other firms.
                      </li>
                      <li>
                        <a
                          href="https://github.com/drecrash"
                          target="_blank"
                          className="fyellow"
                        >
                          https://github.com/drecrash
                        </a>
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 3 */}
          <div
            className="modal fade"
            id="boarddirectors3"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="boarddirectors3Label"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fyellow" id="boarddirectors3Label">
                    Board of Directors
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="articles_grid_thumb pt-0">
                    <img
                      src="assets/img/member_imgs/steve_knaebel.jpg"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="articles_grid_caption text-center">
                    <h4 className="fyellow">Steve Knaebel </h4>
                    <div className="articles_grid_author">
                      <h4>CAO / Secretary</h4>
                    </div>
                  </div>
                  <div className="team_desc">
                    <p></p>
                    <ul>
                      <li>
                        Steve Knaebel is Import's Chief Administrative Officer.
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal 4 */}
          <div
            className="modal fade"
            id="volunteers1"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="volunteers1Label"
            aria-hidden="true"
            data-backdrop="static"
            data-keyboard="false"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title fyellow" id="volunteers1Label">
                    Volunteers
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">
                      <i className="fa-solid fa-xmark" />
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="articles_grid_thumb pt-0">
                    <img
                      src="assets/img/member_imgs/keefe_edgar.png"
                      className="img-fluid"
                      alt
                    />
                  </div>
                  <div className="articles_grid_caption text-center">
                    <h4 className="fyellow">Keefe Edgar</h4>
                    <div className="articles_grid_author">
                      <h4>Volunteer</h4>
                    </div>
                  </div>
                  <div className="team_desc">
                    <p></p>
                    <ul>
                      <li>
                        Keefe Edgar is a volunteer at Import, working on graphic
                        design and C# lesson development.
                      </li>
                      <li>
                        Keefe is a high school student and part-time indie game
                        developer.
                      </li>
                      <li>
                        <a
                          href="https://nubcake14.carrd.co/"
                          target="_blank"
                          className="fyellow"
                        >
                          https://nubcake14.carrd.co/
                        </a>
                      </li>
                    </ul>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Home };
