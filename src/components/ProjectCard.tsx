import React from 'react'

const ProjectCard = () => {
    return (
        <li className="col-md-6 col-lg-4 project">
            <div className="card">
                <img className="img-responsive card-img-top" src="assets/images/placeholder.jpg" alt="" />
                <div className="card-body p-y-20 text-center">
                    <a href="#" className="card-title title-link primary-hover fs-20">NFT Title</a>
                    <p className="fs-12 post-meta-small mt-15 mb-0">Artist Name </p>
                    <p className="fs-12 post-meta-small mt-15 mb-0"><a href="">View on opensea</a></p>
                </div> {/* card-body */}
            </div> {/* card */}
        </li>
    )
}

export default ProjectCard
