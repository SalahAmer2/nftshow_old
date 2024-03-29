import React, {useState} from 'react';
 import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MainContainer from "./components/MainContainer";
import MainContainerAuction from "./components/MainContainerAuction";
import Past_Drops from "./components/Past_Drops";
import Footer from "./components/Footer";
import './App.css';

const App = () => {

    const [goToAuctionBool, setGoToAuctionBool] = useState<boolean>(false)

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
            <Switch>
                <Route exact path='/' component={ Homepage } />
                <Route path='/past_drops' component={Past_Drops} />
            </Switch>

            <section id="cta2" className="big bg-dark-shadow mt-100">
                <div className="container text-center">
                    <h3 className="hidden mb-20">Suggest Feature</h3>
                    <p className="w-50 m-x-auto mb-0">NFTShow does not own neither the smart contract nor the NFTs featured on this website. We only act as an escrow service for duration of auctions. By placing a bid on auctions in this website, you agree to our terms {'&'} conditions </p>
                </div>{/* container */}
            </section>
        </div>

        <Footer />

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
