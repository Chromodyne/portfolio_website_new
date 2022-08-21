import React from "react";
import Terminal from "react-console-emulator";

const commands = {
    echo: {
      description: 'Echo a passed string.',
      usage: 'echo <string>',
      fn: (...args) => args.join(' ')
    },

    // ls: {
    //     description: "List the available pages.",
    //     usage: "ls <string>",
    //     fn: args.
    // },

    // cd: {
    //     description: "Change the page content the available pages.",
    //     usage: "cd <string>",
    //     fn: ,
    // }

    
}

export default function Term() {
    return (
        <Terminal
        commands={commands}
        welcomeMessage={"Welcome to Devin's Portfolio."}
        promptLabel={'me@React:~$'}
      />
    );
}