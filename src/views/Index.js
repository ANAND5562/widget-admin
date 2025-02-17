/*eslint-disable*/
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import SabPaisaLogo from '../assets/img/SabpaisaLogo.svg'


export default function Index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory(); // Initialize useHistory

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin") {
      history.push("/admin/dashboard"); // Redirect using history.push
    } else {
      setErrorMessage("Invalid email or password!");
    }
  };


  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 flex items-center h-screen max-h-860-px">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-12">
          {/* Left Section - Payment Widget */}
          <div className="w-full md:w-5/12 lg:w-5/12 xl:w-5/12 px-4 mr-auto">
            <div className="pt-28 sm:pt-0">
              <div className="font-semibold text-4xl text-blueGray-600">
                Payment <span style={{ color: "#9ACD32" }}>Widget</span>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                Create custom payment buttons, forms, and more.
                Design the perfect checkout experience.
                Secure transactions with smooth integrations.
                Power up your payments today with{" "}
                <a
                  href="https://developer.sabpaisa.in/"
                  className="text-blueGray-600 font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SabPaisa!
                </a>
              </p>
              <div className="mt-12">
                <a
                  href="#"
                  style={{ backgroundColor: "#9ACD32" }}
                  className="get-started text-white font-bold px-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="github-star ml-3 text-white font-bold px-6 py-4 rounded-lg bg-blueGray-700 shadow-lg hover:bg-blueGray-600 hover:shadow-xl transition-all duration-200 transform hover:scale-105"
                >
                  Widget Star
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Login Form */}
          {/* <div className="w-full md:w-5/12 lg:w-4/12 xl:w-4/12 px-4 ml-auto mt-5"> */}
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-5/12 px-6 mx-auto mt-5 max-w-lg ml-5">
            <div className="bg-white shadow-md rounded-md p-10">
              {/* <div className="flex justify-center items-center">
                <img src={SabPaisaLogo} alt="404" className="h-6 w-auto" />
              </div> */}
              <div className="text-center text-3xl">
                Welcome to Sab<span style={{ color: "#9ACD32" }}>Paisa</span>!
              </div>
              {/* <div className="text-center text-sm mt-4 ml-2">
                <p className="text-blueGray-500">
                  Welcome to SabPaisa!
                </p>
              </div> */}

              <form className="mt-6" onSubmit={handleLogin}>
                {/* Email Field */}
                <div className="mb-6 relative">
                  <label className="block text-blueGray-500 text-sm font-semibold mb-2">
                    Email
                  </label>
                  <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blueGray-500">
                    <span className="px-3 text-blueGray-500">
                      <i className="fas fa-envelope"></i>
                    </span>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 border-none rounded-r-lg focus:outline-none"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-8 relative">
                  <label className="block text-blueGray-500 text-sm font-semibold mb-2">
                    Password
                  </label>
                  <div className="flex items-center border rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-blueGray-500">
                    <span className="px-3 text-blueGray-500">
                      <i className="fas fa-lock"></i>
                    </span>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border-none rounded-r-lg focus:outline-none"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <p className="text-red-500 text-sm mb-4 text-center">{errorMessage}</p>
                )}

                {/* Login Button */}
                <div className="mb-6 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blueGray-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:bg-blueGray-600 transform transition-all duration-200 hover:scale-105"
                  >
                    Sign In
                  </button>

                </div>

                {/* Forgot Password & Signup */}
                <div className="text-center">
                  <a href="#" className="text-blueGray-500 text-sm hover:underline">
                    Forgot Password?
                  </a>
                  <p className="mt-3 text-sm text-blueGray-500">
                    Don't have an account?{" "}
                    <a href="#" className="font-bold hover:underline" style={{ color: "#9ACD32" }}>
                      Sign up
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500" style={{ backgroundColor: '#9ACD32' }}>
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      // className="text-lightBlue-500 fill-current"
                      style={{ fill: '#9ACD32' }}
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Fast, Secure, Easy Transactions
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Make payments effortless with our all-in-one solution.
                    Seamless checkout, secure transactions, and instant payouts.
                    Accept cards, wallets, and digital payments with ease.
                    Get started today and grow your business faster!
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Quick-Pay Button
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Allow your customers to complete payments instantly with one click, perfect for fixed-cost services.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Buy Now Button
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Offer a smooth shopping experience, enabling customers to quickly select quantities and make purchases with ease.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Donations Button</h6>
                      <p className="mb-4 text-blueGray-500">
                        Empower your supporters to contribute effortlessly with preset or custom donation amounts, supporting your cause seamlessly.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Custom Button
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Provide advanced customization options, allowing users to set their own payment amounts and customize forms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Protected Payments, Hassle-Free.</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Protected payments, stress-free transactions. Enjoy seamless security with every purchase—no hidden fees, no complications. Just smooth, worry-free payments every time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
