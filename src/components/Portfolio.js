import React, { useState } from "react";
import PortfolioCard from "./portfolio/Card";

function Portfolio(props) {

    return (
        <>
            <div class="container row-auto flex flex-auto justify-center">
                <PortfolioCard cardNumber="1"/>

                <PortfolioCard cardNumber="2"/>
            </div>
        </>
    );

}

export default Portfolio;