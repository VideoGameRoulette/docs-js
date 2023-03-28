import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

export const functionList = [
    {
        name: "send_command",
        snippet: "async def send_command(sock: socket.socket, method: str, params: Iterable[str])",
        description: "Sends a JSON-RPC command to a Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "method",
                desc: "The name of the method to call in the JSON-RPC command."
            },
            {
                name: "params",
                desc: "The parameters to pass to the method."
            }
        ],
    },
    {
        name: "logon",
        snippet: "async def logon(sock: socket.socket, user: str, pin: str)",
        description: "Logs in to a Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            }
        ],
    },
    {
        name: "no_op",
        snippet: "async def no_op(sock: socket.socket)",
        description: "Sends a JSON-RPC request with no operation to the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            }
        ],
    },
    {
        name: "get_status",
        snippet: "async def get_status(sock: socket.socket)",
        description: "Sends a JSON-RPC request to get the status of the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            }
        ],
    },
    {
        name: "get_control",
        snippet: "async def get_control(sock: socket.socket, name: List[str])",
        description: "Sends a JSON-RPC request to get the value of a control in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            }
        ],
    },
    {
        name: "set_control",
        snippet: "async def set_control(sock: socket.socket, name: str, value: int, ramp: Optional[float] = None)",
        description: "Sends a JSON-RPC request to set the value of a control in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            },
            {
                name: "value",
                desc: "The value to set the control to."
            },
            {
                name: "ramp",
                desc: "The time in seconds it takes to ramp the control to the new value."
            },
        ],
    },
    {
        name: "get_component",
        snippet: "async def get_component(sock: socket.socket, name: str, control_name: str)",
        description: "Sends a JSON-RPC request to get the value of a control for a specific component in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            },
            {
                name: "control_name",
                desc: "The name of the control to get the value of."
            }
        ],
    },
    {
        name: "set_component",
        snippet: "async def set_component(sock: socket.socket, name: str, value: int)",
        description: "Sends a JSON-RPC request to set the value of a control for a specific component in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            },
            {
                name: "value",
                desc: "The value to set the control to."
            }
        ],
    },
    {
        name: "get_component_controls",
        snippet: "async def get_component_controls(sock: socket.socket, name: str)",
        description: "Sends a JSON-RPC request to get all controls of a component in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            }
        ],
    },
    {
        name: "get_component_components",
        snippet: "async def get_component_components(sock: socket.socket)",
        description: "Sends a JSON-RPC request to get all child components of a component in the Q-SYS Core device.",
        params: [
            {
                name: "sock",
                desc: "The socket object used for communication with the Q-SYS Core device."
            },
            {
                name: "name",
                desc: "The name of the control to get the value of."
            }
        ],
    },
];

const CodeBlock = ({ funcName, snippet, description, params = [] }) => {
    return (
        <>
            <h3 className="text-lg font-bold my-4" id={funcName}>{funcName}</h3>
            <div className="bg-[#1e1e1e] rounded-md overflow-hidden">
                <SyntaxHighlighter language="python" style={vscDarkPlus}>
                    {snippet}
                </SyntaxHighlighter>
            </div>
            <p className="mt-4">{description}</p>
            <ul className="list-disc ml-8">
                {params.map(({ name, desc }) => (
                    <li key={name}><code>{name}</code>: {desc}</li>
                ))}
            </ul>
        </>

    );
}

export default CodeBlock;