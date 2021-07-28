import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div>
        <div id="preloader">
            <div className="preloader">
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="top"></div>  {/* top */}
        <Navbar />        
        <MainContainer />

            <section id="cta2" className="big bg-dark-shadow mt-100">
                <div className="container text-center">
                    <h3 className="hidden mb-20">Suggest Feature</h3>
                    <p className="w-50 m-x-auto mb-0">NFTShow does not own neither the smart contract nor the NFTs featured on this website. We only act as an escrow service for duration of auctions. By placing a bid on auctions in this website, you agree to our terms {'&'} conditions </p>
                </div>{/* container */}
            </section>
        </div> {/* main-container */}

        <footer>
            <div className="container">
                <div className="row v-center mobile-center">
                    <div className="col-md-4 footer-left-area tablet-top">
                        <p>© NFTShow by Mondoir</p>
                    </div>{/* footer-left-area */}
                    <div className="col-md-8 footer-right-area">
                        <p>
                            <a href="/" className="text-link mr-15">Home</a>
                            <a href="termsAndConditions.html" className="text-link mr-15">Terms & Conditions</a>
                            <a href="privacyPolicy.html" className="text-link mr-15">Privacy Policy</a>
                            <a href="contact.html" className="text-link">Contact</a>
                        </p>
                    </div>{/* footer-right-area */}
                </div>{/* row */}
            </div>{/* container */}
        </footer>
        {/* modal */}
        <div className="modal fade login-modal" tabIndex={-1} role="dialog" data-backdrop="static" data-keyboard="false">
            <div className="modal-dialog modal-dialog-centered modal-sm">
                <div className="modal-content text-center bg-light-body">
                        <div id="preloader">
                            <h6 className="preloader">Please confirm connection on your Metamask</h6>
                            <div className="preloader">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                </div>{/* modal-content */}
            </div>{/* modal-dialogue */} 
            {/* modal */}
        {/* login-modal */}
        </div>
    </div>
  );
}

export default App;
