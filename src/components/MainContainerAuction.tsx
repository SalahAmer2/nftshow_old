import React from 'react'
import ViewLink from "./ViewLink";
import SVG from "./auctionBidderSVG";

const MainContainerAuction = () => {
    return (
        <section id="components" className=" pb-0">
        <div className="container">

            {/* Video */}
            <div className='divContainVid'>
                <video src="https://ipfs.io/ipfs/QmcFPLWx3mJvmVsRNwgaDNhEMKzoKMWHHarV6macNrK1tZ?filename=EBI.mp4" poster="https://d2ybmb80bbm9ts.cloudfront.net/35/pj/QmVbsF1huHaf22Fgq6sBn6hiqMWAkqCF2GNRVwKFH835pj/nft.jpg" loop autoPlay muted playsInline className="videoNFT">Video tag not supported</video>
            </div>

            <div className="row mt-20">
                <div className="col-lg-6">
                    <div className="section-title-area">
                        <div className="widget p-30 bg-light rounded-10 raised-sm">
                            <div className="row mb-20">
                                <div className="col-lg-12">
                                    <h6 className="widget-title">Steve Aoki - The dance of Light </h6>
                                    <p className="mb-0 fs-12 fw-regular">
                                        Medium: Video/mp4<br />
                                        Duration: 0:30 Seconds<br />
                                        Edition: 1/1<br />
                                        IPFS Link: <ViewLink linkURL={"https://ipfs.io/ipfs/QmVm5Ceg6DkZx1s2pNNas8riGxUzWeXaDHjckuGRWHS5Bm/nft.mp4"}/>
                                        <br />
                                        IFPS Metadata: <ViewLink linkURL={"https://ipfs.io/ipfs/QmRABKhHitLFheaHAkgmuvRZKMYzXyfMeWPnLHWJHGvocA/metadata.json"}/>
                                        <br />
                                        Etherscan: <ViewLink linkURL={"https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=102"}/>
                                        <br />
                                    </p>
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
                    </div> {/* section-title-area */}
                </div>
                <div className="col-lg-6">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="widget p-30 bg-light rounded-10 raised-sm">
                                <div className="row">
                                    <div className="col-lg-6">
                                         {/* if reserve is not met or no bid is placed  */}
                                         {/* <h6 className="widget-title">Reserve: 5 ETH</h5>   */}

                                         {/* when auction is started  */}
                                        <h5 className="widget-title">Current bid:<br /><strong>6 ETH</strong></h5>
                                    </div>
                                    <div className="col-lg-6 text-left">
                                         {/* if reserve is not met or no bid is placed  */}
                                         {/* <p>24 hour auction will begin once a bid has been placed & reserve is met.</p>  */}

                                         {/* when auction is started  */}
                                        <h5 className="widget-title">Time Remaining:<br /><strong>23h: 12m:11s</strong></h5>
                                    </div>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-lg-12">
                                         {/* when youre not the highest bidder  */}
                                         {/* <a href="#" className="btn btn-sm btn-outline-primary w-100"><i className="fas fa-gavel mr-5"></i> Place a bid</a>  */}

                                         {/* when youre the highest bidder  */}
                                        <a href="#" className="btn btn-sm btn-outline-success w-100"><i className="fas fa-gavel mr-5"></i> The current bid is with you!</a>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="table-overflow">
                                <table className="table table-sm">
                                    <tbody>
                                         {/* list of bidder according to time of bid - top bidder at the top  */}
                                        <tr>
                                            <td>12/07/2021 07:12pm</td>
                                            <td>0xc78d....j88h</td>
                                            <td>6 ETH</td>
                                            <td><SVG /></td>
                                        </tr>
                                        <tr>
                                            <td>12/07/2021 07:10pm</td>
                                            <td>0xa33b....d92f</td>
                                            <td>5 ETH</td>
                                            <td><SVG /></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> {/* container  */}
    </section>

    )
}

export default MainContainerAuction;
