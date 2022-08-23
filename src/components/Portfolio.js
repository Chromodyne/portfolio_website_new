import React, { useState } from "react";
import PortfolioCard from "./portfolio/Card";

function Portfolio(props) {

    return (
        <>
            <div class="container row-auto flex flex-auto justify-center my-8">
                <div class="mx-3">
                    <PortfolioCard cardNumber="1"/>
                </div>
                <div class="mx-3">
                    <PortfolioCard cardNumber="2"/>
                </div>
                <div>
                    <PortfolioCard cardNumber="3"/>
                </div>
            </div>
        </>
    );

}

export default Portfolio;