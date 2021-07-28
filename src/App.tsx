import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="preloader">
        <div className="preloader">
            <span></span>
            <span></span>
        </div>
      </div>

      <div id="top"></div>  {/* top */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <Link className="navbar-brand" to="#x"><img src={logo} alt="image not found" /></Link>
        {/* <a className="navbar-brand" href="#x"><img src="assets/images/logo.png" alt=""></a> */}

        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-toggle-nav-center" aria-controls="navbar-toggle-nav-center" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
            <span className="sr-only">Toggle navigation</span>
        </button> {/* navbar-toggler */}

        <div className="collapse navbar-collapse" id="navbar-toggle-nav-center">
            <ul className="navbar-nav m-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#x">Current Drop</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Past Drops</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Consign</a>
                </li>
            </ul>{/* navbar-nav */}

            <ul className="navbar-button p-0 m-0">
                <li className="nav-item">
                    <a href="#x" className="btn btn-sm btn-primary nav-button" data-toggle="modal" data-target=".login-modal"><i className="fas fa-wallet mr-10"></i><span>Connect Wallet</span></a>
                </li>
            </ul>
        </div>{/* navbar-collapse */}
    </div>{/* navbar-container */}
</nav>

    <div className="main-container">

        <section id="components" className=" pb-0">
            <div className="container">
                <div style="box-sizing: border-box; margin: 0px; min-width: 0px; display: flex; -webkit-box-pack: center; justify-content: center; width: 100%;">
                    <video src="https://ipfs.io/ipfs/QmcFPLWx3mJvmVsRNwgaDNhEMKzoKMWHHarV6macNrK1tZ?filename=EBI.mp4" poster="https://d2ybmb80bbm9ts.cloudfront.net/35/pj/QmVbsF1huHaf22Fgq6sBn6hiqMWAkqCF2GNRVwKFH835pj/nft.jpg" loop="" autoplay="" muted="" playsinline="" className="videoNFT">Video tag not supported</video>
                     {/* <img src="https://ipfs.pixura.io/ipfs/QmeAzBHFbyeEbvnSNmjNKy8jcnTK2MEXyeoz28AtSxcbik/brainwash.gif" className="imgNFT">  */}
                </div>
                <div className="section-title-area mt-20">
                    <div className="widget p-30 bg-light rounded-10 raised-sm">
                        <div className="row mb-20">
                            <div className="col-lg-6">
                                <h6 className="widget-title">Steve Aoki - The dance of Light </h6>
                                <p className="mb-0 fs-12 fw-regular">
                                    Medium: Video/mp4<br />
                                    Duration: 0:30 Seconds<br />
                                    Edition: 1/1<br />
                                    IPFS Link: <a className="mb-0 fs-12 fw-regular" href="https://ipfs.io/ipfs/QmVm5Ceg6DkZx1s2pNNas8riGxUzWeXaDHjckuGRWHS5Bm/nft.mp4" target="_blank">View <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="css-13o7eu2"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg></a><br />
                                    IFPS Metadata: <a className="mb-0 fs-12 fw-regular" href="https://ipfs.io/ipfs/QmRABKhHitLFheaHAkgmuvRZKMYzXyfMeWPnLHWJHGvocA/metadata.json" target="_blank">View <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="css-13o7eu2"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg></a><br />
                                    Etherscan: <a className="mb-0 fs-12 fw-regular" href="https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=102" target="_blank">View <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="css-13o7eu2"><path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path><path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path></svg></a><br />
                                </p>
                            </div>
                            <div className="col-lg-6 text-right">
                                <a href="item-details.html" className="btn btn-sm btn-outline-primary"><i className="fas fa-gavel mr-5"></i> Go to auction...</a>
                            </div>
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>{/* section-title-area */}
            </div>{/* container */}
        </section>


        </div>{/* container */}



        <section id="cta2" className="big bg-dark-shadow mt-100">
            <div className="container text-center">
                <h3 className="hidden mb-20">Suggest Feature</h3>
                <p className="w-50 m-x-auto mb-0">NFTShow does not own neither the smart contract nor the NFTs featured on this website. We only act as an escrow service for duration of auctions. By placing a bid on auctions in this website, you agree to our terms & conditions </p>
            </div>{/* container */}
        </section>
    </div>{/* main-container */}

    


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
    <div className="modal fade login-modal" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">
        <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content text-center bg-light-body">
                    <div id="preloader">
                        <h6 className="preloader" style="width: 100%; left: 0; top:40%; margin-left: 0; text-align: center;">Please confirm connection on your Metamask</h6>
                        <div className="preloader">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
            </div>{/* modal-content */}
        </div>{/* modal-dialogue */} 
    </div>{/* modal */}
    {/* login-modal */}</nav>
    </div>
  );
}

export default App;
