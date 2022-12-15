import React, { useState } from 'react'

function MessageSender({ setMessage }) {
    const [msg, setMsg] = useState("");
    return <div>
        <div className="checklist-card">
            <h1 className="list-header">Send A Message To Your Future Self</h1>
            <div className="buttons-panel">
                <input className="inputs" value={msg} onChange={(e) => {
                    setMsg(e.target.value)
                }} />
                <button
                    className="inputs"
                    onClick={ () => setMessage(msg)}
                >
                    Send Message to Message Component
                </button>
            </div>
        </div>
    </div>
}

export default MessageSender