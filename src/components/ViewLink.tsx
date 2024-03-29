import React from 'react'

const ViewLink = ({linkURL}) => {
    return (
        <a className="mb-0 fs-12 fw-regular" href={linkURL} target="_blank">
            View 
            <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" width="8" height="8" className="css-13o7eu2">
                <path d="M15 0H8v2h4.6L6.3 8.3l1.4 1.4L14 3.4V8h2V1c0-.6-.4-1-1-1z" fill="currentColor"></path>
                <path d="M14 16H1c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h4v2H2v11h11v-3h2v4c0 .6-.4 1-1 1z" fill="currentColor"></path>
            </svg>
        </a>
    )
}

export default ViewLink
