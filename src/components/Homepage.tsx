import React, {useState} from 'react'
import MainContainer from "./MainContainer";
import MainContainerAuction from "./MainContainerAuction";

const Homepage = () => {

    const [goToAuctionBool, setGoToAuctionBool] = useState<boolean>(false)

    return (
        <div>
            {goToAuctionBool ? <MainContainerAuction /> : <MainContainer setGoToAuctionBool={setGoToAuctionBool}/> }
        </div>
    )
}

export default Homepage
