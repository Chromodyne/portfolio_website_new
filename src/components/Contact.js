import React, { useState } from "react";

function Contact() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");


    return (
        <h1>This will be the contact page.</h1>
    );
}