import React from 'react'
import { Helmet } from 'react-helmet-async'
import "./../styled/404page.css"
const NotFound = () => {
    return (
        <>
        <Helmet>
            <title>404 Not Found  | Guarantee Ornament House</title>
        </Helmet>
        <div id="main">
            <div className="fof">
                <h1>404</h1><br />
                <h1>Page not Found</h1>
            </div>
        </div>
        </>
    )
}

export default NotFound