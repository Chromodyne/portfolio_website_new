import React from "react";
import headshot from "./about/img/ds-cropped.jpg";

function About() {

    return (
        <div className="grid place-items-center bg-quaternary">
                <div className="row py-0 mt-8 mb-4">
                    <img src={headshot} className="transform max-w-sm rounded-full" alt="Headshot."></img>
                </div>
                <div className="row">
                    <h1 className="text-2xl mb-6 content-center text-primary">About Me</h1>
                </div>
                <div className="row mx-20 text-base max-w-prose mb-10 text-primary bg-tertiary">
                    <p>Greetings! My name is Devin Sinitiere. I am an aspiring software engineer from Las Vegas, NV. My primary hobbies are learning, technology, gaming, diving, and of course programming!</p> 
                    <br></br>    
                    <p>
                        Ever since I was a child I have been enamored with anything dealing with computers. 
                        Whether it was the way the hardware functioned or how software, like magic, transformed input into output
                        computers defined passion for me. In truth, I spent almost every free minute of my youth on them tinkering, gaming, and, most importantly, learning. Well, at least as
                        much time as my parents allowed.
                        
                    </p>
                    <br></br>
                    <p> 
                        Over the years I have spent significant quantities of free time on pet programming projects.
                        Primarily working in C, C++, JavaScript, and x86 Assembly. My ultimate interest in programming was, and remains, that of deep understanding of the machine.
                        I have never been one to accept a surface level understanding of things and programming and computers were no exception.
                        While the benefits of abstractions are abundantly apparent as pedagogical tools, I always had the feeling something was missing when core concepts were abstracted away.
                        I didn't just want to know that something works I wanted to know why and how.
                    </p>
                    <br></br>
                    <p>In 2022 I decided to take concrete steps to turn what has remained a passion into a career path by joining Georgia Tech's Full-Stack Coding Bootcamp.</p>
                </div>
                         
        </div>
    );
    
}

export default About;