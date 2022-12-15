import '../styles/global.css'

function Message({message}) {
    return (
        <div>
            <div className="message">
                <h1>Message Component</h1>
                <body>{message}</body>
            </div>
        </div>
    )
}

export default Message;