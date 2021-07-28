import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer
