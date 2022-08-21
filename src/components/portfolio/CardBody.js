import React from "react";


function CardBody(props) {
    return (
        <>
            <a href="/">
            <img src={props.changeImage} alt="Hello"></img>
        </a>
        <div class="p-5">
            <a href="/">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Zone Experience Project</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A completely functional level system for S.T.A.L.K.E.R. Anomaly. Written entirely in LUA.</p>
            <a href="/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Project 1
            </a>
        </div>
    </>
    );
}

export default CardBody;