import React, { useState } from "react";
import dummy1 from "./img/dummy1.png";
import dummy2 from "./img/dummy2.png";
import atScreen from "./img/at-screenshot.png";
import screen360 from "./img/360-screenshot.png";
import zepScreen from "./img/zep-screenshot.jpg";
import osDev from "./img/pexels-stockos.jpg";

function PortfolioCard(props) {

    console.log(props);

    //TODO: All of these ugly conditionals need to be reduced into potentially stateful conditions.
    function chooseImage (props) {

        if (props.cardNumber == 1) {
            return <img src={zepScreen} alt="Img"></img>
        } else if (props.cardNumber == 2){
            return <img src={atScreen} alt="Img"></img>
        } else if (props.cardNumber == 3){
            return <img src={screen360} alt="Img"></img>
        } else if (props.cardNumber == 4){
            return <img src={osDev} alt="Img"></img>
        }
    }

    function chooseTitle (props) {
        if (props.cardNumber == 1) {
            return <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Zone Experience Project</h5>;
        } else if (props.cardNumber == 2) {
            return <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">The Accessible Times</h5>;
        } else if (props.cardNumber == 3) {
            return <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">360 Degrees</h5>;
        } else if (props.cardNumber == 4) {
            return <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OS Development</h5>;
        }
    }

    function chooseText(props) {
        if (props.cardNumber == 1) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A completely functional level system for S.T.A.L.K.E.R. Anomaly. Written entirely in LUA.</p>;
        } else if (props.cardNumber == 2) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A newsreader web application with a focus on accesibility to give definitions and context for words for non-native english speakers.</p>;
        } else if (props.cardNumber == 3) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A full-stack web application where users can leave reviews for their chosen degree program to help others make informed decisions.</p>;
        } else if (props.cardNumber == 4) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">An self educational venture into learning the basics of operating systems development by building a bootloader in x86 assembly using NASM and QEMU.</p>;
        }
    }

    function setLanguages(props) {
        if (props.cardNumber == 1) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">LUA</p>;
        } else if (props.cardNumber == 2) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">HTML, CSS, JS</p>;
        } else if (props.cardNumber == 3) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">NodeJS, Handlebars, MySQL, Express, etc.</p>;
        } else if (props.cardNumber == 4) {
            return <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Assembly</p>;
        }
    }

    return (

        <div class="mt-10 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                {chooseImage(props)}
            </a>
            <div class="p-5">
                {setLanguages(props)}
                <a href="/">
                {chooseTitle(props)}
                </a>
                {chooseText(props)}
                <a href="/" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    GitHub
                </a>
            </div>
        </div>

    );
}

export default PortfolioCard;