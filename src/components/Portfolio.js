import React, { useState } from "react";
import PortfolioCard from "./portfolio/Card";

function Portfolio(props) {

    return (
        <>
            <div class="container row-auto flex flex-auto justify-center">
                <PortfolioCard />
            </div>
        </>
    );

}

export default Portfolio;