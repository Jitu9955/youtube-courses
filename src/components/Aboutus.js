import React, { useState } from "react";
import { Jumbotron, Button, Card } from "reactstrap";

const howToUseApp = [
  {
    id: 1,
    title: "Sign in",
    info: "Log in to access your account and enjoy personalized content.Securely sign in to unlock exclusive features and manage your preferences.",
  },
  {
    id: 2,
    title: "Add your bank Account",
    info: "Expand your horizons with our wide range of courses. Use your bank account to unlock new learning opportunities.Invest in your education effortlessly. Access premium courses by making secure transactions through your bank account.",
  },
  {
    id: 3,
    title: "Send payment request",
    info: "Congratulations on your course purchase! Kindly check your inbox for a payment request.Payment request sent! Complete your course purchase effortlessly by following the provided link.",
  },
];

const Aboutus = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img
                width="500"
                height="500"
                alt=""
                src="https://nhyirapremiumuniversity.com/wp-content/uploads/2018/11/course.png"
                loading="lazy"
              />
            </div>

            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                Welcome to our website! We are a passionate team working to
                bring you the best content. Our mission is to provide valuable
                information and resources to our users.
              </h3>
              <h1 className="main-heading">How to use the App?</h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <Button color="primary" outline>
                Learnmore
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd part of bayt us section  */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            {/* 1section right side data  */}
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h1 className="main-heading">
                World class support is <br /> available 24/7
              </h1>

              {aboutData.map((curElem) => {
                const { id, title, info } = curElem;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <Button color="primary" outline>
                Learnmore
              </Button>
            </div>

            {/* images section  */}
            <div className="col-12 col-lg-5  our-service-rightside-img">
              <img
                width="500"
                height="500"
                alt=""
                src="https://tse4.mm.bing.net/th?id=OIP.nBrn5qkJPGLc-3J7Brjn9wHaEK&pid=Api&P=0&h=180"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
