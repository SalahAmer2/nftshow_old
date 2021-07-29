import React from 'react'
import Project from "./ProjectCard";

const Past_Drops = () => {
    return (
        <section className="big" style={{minHeight: '1000px'}}>
            <div className="container">
                <h2 className="hidden">Past Drops</h2>
                <ul className="row portfolio project-grid lightbox list-unstyled mb-0" id="grid">

                    <Project />
                    <Project />
                    <Project /> 

                </ul> {/* portfolio */}
            </div> {/* container */}
        </section>
    )
}

export default Past_Drops;
