import React, { useState } from "react";
import PortfolioCard from "./portfolio/Card";

function Portfolio(props) {

    return (
        <>
            <div class="bg-quaternary grid grid-flow-row-dense pl-40 pb-10 grid-cols-1 cs:grid-cols-3">
                <div>
                    <PortfolioCard cardNumber="1"/>
                </div>
                <div>
                    <PortfolioCard cardNumber="2"/>
                </div>
                <div>
                    <PortfolioCard cardNumber="3"/>
                </div>
                <div>
                    <PortfolioCard cardNumber="4"/>
                </div>
            </div>            
        </>
    );

}

export default Portfolio;