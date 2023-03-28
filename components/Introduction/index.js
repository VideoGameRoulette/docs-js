import { useState, useEffect } from 'react';

const Info = {
    title: "Q-SYS Remote Control API",
    description: "This is a Python module for interfacing with the Q-SYS remote control API over a TCP/IP socket connection. The API provides a way to get and set values of controls in the Q-SYS Designer environment.",
    gs: {
        title: "Getting Started",
        p: [],
    },
    pre: {
        title: "Prerequisites",
        list: [
            "Python 3.7 or higher",
            "Q-SYS Core Designer"
        ],
    },
    install: {
        title: "Installation",
        p: "You can install this module using pip:",
        instructions: "under construction"
    },
    usage: {
        title: "Usage",
        p: ["To use this module, you will need to have a Q-SYS Core Designer project open and running on your network."],
    },
}

const Info2 = {
    title: "Q-SYS Remote Control API",
    description: "This is a NodeJS module for interfacing with the Q-SYS remote control API over a TCP/IP socket connection. The API provides a way to get and set values of controls in the Q-SYS Designer environment.",
    gs: {
        title: "Getting Started",
        p: [],
    },
    pre: {
        title: "Prerequisites",
        list: [
            "NodeJS Version ??",
            "Q-SYS Core Designer"
        ],
    },
    install: {
        title: "Installation",
        p: "You can install this module using pip:",
        instructions: "under construction"
    },
    usage: {
        title: "Usage",
        p: ["To use this module, you will need to have a Q-SYS Core Designer project open and running on your network."],
    },
}

const Introduction = ({ state }) => {
    const [list, setList] = useState(Info);

    useEffect(() => {
        if (!state) {
            setList(Info);
            return;
        }
        setList(Info2);
    }, [state]);

    return (
        <>
            <h1 className="xl:text-3xl text-xl font-bold mb-4">{list.title}</h1>
            <p className="mb-4 xl:text-base text-sm">{list.description}</p>
            <h3 className="text-xl font-bold mb-2" id="Getting-Started">{list.gs.title}</h3>
            {list.gs.p.map((str, idx) => (
                <p key={`gs${idx}`}>{str}</p>
            ))}
            <h4 className="text-lg font-bold mb-2" id="Prerequisites">{list.pre.title}</h4>
            <ul className="list-disc list-inside mb-4 xl:text-base text-sm">
                {list.pre.list.map((str, idx) => (
                    <li key={`pr${idx}`}>{str}</li>
                ))}
            </ul>
            <h4 className="text-lg font-bold mb-2" id="Installation">{list.install.title}</h4>
            <p className="mb-4 xl:text-base text-sm">{list.install.p}</p>
            <div className="bg-[#1e1e1e] p-4 rounded-md mb-8">
                <code className="text-gray-400">under construction</code>
            </div>
            <h3 className="text-xl font-bold mb-2" id="Usage">{list.usage.title}</h3>
            {list.usage.p.map((str, idx) => (
                <p key={`u${idx}`} className='xl:text-base text-sm'>{str}</p>
            ))}
        </>
    )
}

export default Introduction;