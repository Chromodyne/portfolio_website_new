import React, { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const [submit, setSubmit] = useState(false);


    return (
        <div className="bg-quaternary h-screen">
        <form className="bg-quaternary grid grid-flow-row-dense grid-cols-1 place-items-center">
            <label className="mt-20" for="name">Name:</label>
            <input type="text"></input>
            <label className="mt-5" for="name">Email:</label>
            <input type="email"></input>
            <label className="mt-5" for="reason">Reason for contacting:</label>
            <textarea></textarea>
            <button className="bg-primary text-tertiary my-5 w-20 h-10 rounded-md">Submit</button>
        </form>
        </div>
        
    );
}

export default Contact;