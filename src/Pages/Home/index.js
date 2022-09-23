import React, { useRef, useEffect } from "react";
import Footer from "../../components/Footer";

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
      <div className="heading">
        <div className="blurred-content">
          <video autoPlay loop>
            <source src="/videos/Cascade.mp4" type="video/mp4" />
          </video>
        </div>
        <img
          className="wheat-icon"
          src="https://img.icons8.com/doodle/80/000000/wheat--v1.png"
        />
        <h2 className="slogan">Direct farm to table </h2>
        <img src="https://img.icons8.com/plasticine/80/000000/eggs.png" />
        <h2 className="slogan">Free Range Eggs</h2>
        <img src="https://img.icons8.com/external-icongeek26-outline-icongeek26/80/000000/external-goat-animal-body-icongeek26-outline-icongeek26.png" />
        <h2 className="slogan">Ethical agricultural farming</h2>
      </div>

      {/* Hours of operation */}
      <div className="work-hours">
        <h1 className="heading">Hours of Operation</h1>
        <div className="hours-container">
          <p>Monday to Friday: 8:00 am - 6:00pm</p>
          <p>Saturday: 9:00 am - 6:00 pm</p>
          <p>Sunday: Closed</p>
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

        {/* Contact Section */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default Home;
