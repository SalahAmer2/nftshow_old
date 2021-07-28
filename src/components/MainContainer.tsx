import React from 'react'
import ViewLink from "./ViewLink";

const MainContainer = () => {
    return (
        <div>
            <div className="main-container">

            <section id="components" className=" pb-0">
                <div className="container">
                    <div className='divContainVid'>
                        <video src="https://ipfs.io/ipfs/QmcFPLWx3mJvmVsRNwgaDNhEMKzoKMWHHarV6macNrK1tZ?filename=EBI.mp4" poster="https://d2ybmb80bbm9ts.cloudfront.net/35/pj/QmVbsF1huHaf22Fgq6sBn6hiqMWAkqCF2GNRVwKFH835pj/nft.jpg" loop autoPlay muted playsInline className="videoNFT">Video tag not supported</video>
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
                                        IPFS Link: <ViewLink linkURL={"https://ipfs.io/ipfs/QmVm5Ceg6DkZx1s2pNNas8riGxUzWeXaDHjckuGRWHS5Bm/nft.mp4"}/>
                                        <br />
                                        IFPS Metadata: <ViewLink linkURL={"https://ipfs.io/ipfs/QmRABKhHitLFheaHAkgmuvRZKMYzXyfMeWPnLHWJHGvocA/metadata.json"}/>
                                        <br />
                                        Etherscan: <ViewLink linkURL={"https://etherscan.io/token/0x3B3ee1931Dc30C1957379FAc9aba94D1C48a5405?a=102"}/>
                                        <br />
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
        </div>
    )
}

export default MainContainer
