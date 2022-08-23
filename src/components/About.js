import React from "react";
import headshot from "./about/img/placeholder-picture.JPG";

function About() {

    return (
        <div class="grid place-items-center">
                    <img src={headshot} className="transform scale-50 max-w-sm my-2 rounded-full py-0" alt="Headshot."></img>
                <div className="row">
                    <h1 className="text-2xl mb-6 content-center">About Me</h1>
                </div>
                <div className="row mx-20 text-base max-w-prose">
                    <p>Greetings! My name is Devin Sinitiere. I am an aspiring software engineer from Las Vegas, NV. My primary hobbies are learning, technology, </p> 
                    <br></br>    
                    <p>Since I was child I have been enamored with anything dealing with computers and technology. Whether it was the hardware or software computers defined passion for me. I spent a significant portion of my life working on the IT side of things. . </p>

                    <p>Throughout my years I spent significant quantities of free time on pet programming projects. Primarily I worked in C, C++, and x86 Assembly. This languages always gelled the most with my personality as while I understand the necessity of abstractions in programming I have never been one to shy away from understanding concepts at their deepest levels.</p>

                    <p>In 2022 I decided to take concrete steps to turn what has been a passion into a career path by joining Georgia Tech's Coding Bootcamp.</p>
                </div>
                         
        </div>
    );
    
}

export default About;