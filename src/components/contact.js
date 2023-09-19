import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Contact() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [first_name, setFirstname] = useState("");
  const [subject, setSubject] = useState("");

  const handleChangeemail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handleChangemsg = (e) => {
    setMessage(e.target.value);
    console.log(e.target.value);
  };
  const handleChangefirstname = (e) => {
    setFirstname(e.target.value);
    console.log(e.target.value);
  };
  const handleChangeSub = (e) => {
    setSubject(e.target.value);
    console.log(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e) => {
    console.log("Ddd");
    if (first_name.trim() === "") {
      toast.error("First Name is required");
      return;
    }

    // Validate email field
    if (email.trim() === "") {
      toast.error("Email is required");
      return;
    } else if (!validateEmail(email)) {
      toast.error("Invalid email address");
      return;
    }

    // Validate message field
    if (message.trim() === "") {
      toast.error("message is required");
      return;
    } else if (message.length < 6) {
      toast.error("message should be at least 6 characters long");
      return;
    }

    console.log(e.target.files);
    const file_detailsd = new FormData();
    file_detailsd.append("email_address", email);
    file_detailsd.append("message", message);
    file_detailsd.append("subject", subject);
    file_detailsd.append("first_name", first_name);
    axios
      .post(
        process.env.REACT_APP_API_URL + "importsite/contact/create",
        file_detailsd
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.message);

        if (res.data.status == "success") {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <section className="page-title pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="breadcrumbs-wrap">
                  <h1 className="breadcrumb-title">Get in Touch</h1>
                </div>
              </div>
            </div>
            <div className="donate-button">
              <givebutter-widget id="pAdEkg"></givebutter-widget>
            </div>
          </div>
        </section>
        {/* ============================ Page Title End ================================== */}
        {/* ============================ Form Start ================================== */}
        <section className="pt-100 section_pdng_topbtm">
          <div className="container">
            {/* row Start */}
            <div className="row">
              {/* <div className="col-lg-8 col-md-7">
                <div className="prc_wrap">
                  <div className="prc_wrap_header">
                    <h3 className="property_block_title py-3">
                      Fill up the Form
                    </h3>
                  </div>
                  <div className="prc_wrap-body">
                    <div className="row">
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            className="form-control simple"
                            onChange={handleChangefirstname}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control simple"
                            onChange={handleChangeemail}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        type="text"
                        className="form-control simple"
                        onChange={handleChangeSub}
                      />
                    </div>
                    <div className="form-group">
                      <label>Type Your Message</label>
                      <textarea
                        className="form-control simple"
                        defaultValue={""}
                        onChange={handleChangemsg}
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-theme" onClick={handleSubmit}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="prc_container">
                <div className="prc_wrap">
                  <div className="prc_wrap_header">
                    <h3 className="property_block_title py-3">Reach Us</h3>
                  </div>
                  <div className="prc_wrap-body">
                    <div className="contact-info">
                      <h2 className="mb-5">Get In Touch</h2>
                      {/* <div class="cn-info-detail">
											<div class="cn-info-icon">
												<i class="fa-solid fa-map-location-dot"></i>
											</div>
											<div class="cn-info-content">
												<h4 class="cn-info-title">Reach Us</h4>
												4040 Civic Center<br/> Dr Ste 200<br/> San Rafael, CA 94903, USA
											</div>
										</div> */}
                      <div className="cn-info-detail">
                        <div className="cn-info-mail">
                          <h4 className="cn-info-title">Drop a Mail</h4>
                          <p>
                            andre@getredtie.com
                          </p>
                        </div>
                        <div className="cn-info-discord">
                          <h4 className="cn-info-title">Join the Discord</h4>
                          <p>
                            <a href="https://discord.gg/Pq6W6zSE2v">Click Here</a>
                          </p>
                        </div>
                      </div>
                      {/* <div class="cn-info-detail">
											<div class="cn-info-icon">
												<i class="fa-solid fa-mobile-screen"></i>
											</div>
											<div class="cn-info-content">
												<h4 class="cn-info-title">Call Us</h4>
												<a href="tel:14151234563">+1(415) 123-4563</a>
											</div>
										</div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          <ToastContainer />
        </section>
      </div>
    </>
  );
}

export { Contact };
