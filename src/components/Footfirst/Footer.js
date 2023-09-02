import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.gmail.com"
            role="button"
          >
            <MDBIcon far icon="envelope" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="tel:+7073269955"
            role="button"
          >
            <MDBIcon fas icon="phone" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://auth.geeksforgeeks.org/user/gaurjitu1/practice/"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://leetcode.com/Jitugaur2001/"
            role="button"
          >
            <MDBIcon fas icon="laptop-code" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.linkedin.com/in/jitendra-gaur-651691221/"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://github.com/Jitu9955"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start>
                <MDBInput
                  contrast
                  type="email"
                  label="Email address"
                  className="mb-4"
                  href="https://www.gmail.com"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn
                  outline
                  color="light"
                  floating
                  className="m-1"
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  role="button"
                >
                  <MDBIcon far icon="envelope" />
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className="mb-4 bold">
          <p>
            "Effortlessly organize and optimize courses with our user-friendly
            Course Management Web App! 📚💻 Streamline curriculum planning,
            track student progress, and enhance learning experiences. 🎯 Boost
            productivity and stay in control of your educational journey with
            our intuitive platform. 🚀 #G-COURSE"
          </p>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://www.gmail.com" className="text-white">
                    G-mail
                  </a>
                </li>
                <li>
                  <a href="tel:+7073269955" className="text-white">
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jitendra-gaur-651691221/
"
                    className="text-white"
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Code-Profile</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a
                    href="https://auth.geeksforgeeks.org/user/gaurjitu1/practice/"
                    className="text-white"
                  >
                    GeeksForGeek
                  </a>
                </li>
                <li>
                  <a
                    href="https://leetcode.com/Jitugaur2001/"
                    className="text-white"
                  >
                    LeetCode
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Bio-Profile</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="https://github.com/Jitu9955" className="text-white">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://jitu9955.github.io/my-profile/"
                    className="text-white"
                  >
                    My-Profile
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-white" href="/">
          G-COURSE
        </a>
      </div>
    </MDBFooter>
  );
}
