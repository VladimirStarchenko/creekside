import React, { useRef, useEffect } from "react";

function Home() {
  const ref = useRef(null);

  useEffect(() => {
    let moreBtn = document.getElementById("more-btn");
    let lessBtn = document.getElementById("less-btn");
    let hiddenImgs = document.querySelectorAll("#hidden-img");

    moreBtn.addEventListener("click", showPhotos);
    lessBtn.addEventListener("click", hidePhotos);

    function showPhotos() {
      hiddenImgs.forEach((hiddenImg) => {
        hiddenImg.classList.remove("hide");
      });
      moreBtn.classList.add("hide");
      lessBtn.classList.remove("hide");
    }

    function hidePhotos() {
      hiddenImgs.forEach((hiddenImg) => {
        hiddenImg.classList.add("hide");
      });
      moreBtn.classList.remove("hide");
      lessBtn.classList.add("hide");
    }
  }, []);

  return (
    <>
      <div className="blurred-content">
        <video autoPlay loop>
          <source src="/videos/Cascade.mp4" type="video/mp4" />
        </video>

        <div className="heading">
          <img
            className="wheat-icon"
            src="https://img.icons8.com/doodle/48/000000/wheat--v1.png"
          />
          <h2 className="slogan">Direct farm to table </h2>
        </div>
        {/*  Photo Gallery */}
        <div className="photo-gallery">
          <h1 className="heading">Photo Gallery</h1>
        </div>

        <div className="photos-container">
          <img className="photo" src="/img/dog.png" />
          <img className="photo" src="/img/goat.png" />
          <img className="photo" src="/img/chicken.png" />
          <img className="photo" src="/img/dog.png" />
          <img className="photo" src="/img/goat.png" />
          <img className="photo" src="/img/chicken.png" />
          <img className="photo" src="/img/dog.png" />
          <img className="photo" src="/img/goat.png" />
          <img className="photo" src="/img/chicken.png" />

          <img
            className="photo hide"
            id="hidden-img"
            src="/img/dog.png"
            ref={ref}
          />
          <img
            className="photo hide"
            id="hidden-img"
            src="/img/goat.png"
            ref={ref}
          />
          <img
            className="photo hide"
            id="hidden-img"
            src="/img/chicken.png"
            ref={ref}
          />
        </div>
        <div className="gallery-btns">
          <button className="load-btn styled-btn" id="more-btn" ref={ref}>
            Show More
          </button>
          <button className="load-btn styled-btn hide" id="less-btn" ref={ref}>
            Show Less
          </button>
        </div>

        {/* Hours of operation */}
        <div className="work-hours">
          <h1 className="heading">Hours of Operation</h1>
          <div className="hours-container">
            <p>Monday to Friday: 8:00 am - 6:00pm</p>
            <p>Saturday: 9:00 am - 6:00 pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        {/* Contact Section */}
        <h1 className="heading">Contact Us</h1>
        <div className="contact-section">
          <div className="contact-map">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.052606085438!2d-79.86945338416125!3d43.43861727429719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b645db69029cf%3A0x9abb3c7728b8ef01!2s4480%20Side%20Rd%204%2C%20Burlington%2C%20ON%20L7M%200S4!5e0!3m2!1sen!2sca!4v1655054001114!5m2!1sen!2sca"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="contact-form">
            <form
              name="sentMessage"
              id="contactForm"
              noValidate="novalidate"
              action="https://formsubmit.co/natashastar77@yahoo.ca"
              method="POST"
            >
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required="required"
                  data-validation-required-message="Please enter your name"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required="required"
                  data-validation-required-message="Please enter your email"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                  data-validation-required-message="Please enter a subject"
                />
                <p className="help-block text-danger"></p>
              </div>
              <div className="control-group">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Message"
                  required="required"
                  data-validation-required-message="Please enter your message"
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <button
                className="btn btn-custom styled-btn"
                type="submit"
                role="button"
                id="sendMessageButton"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
