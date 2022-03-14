import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import {  createMessage } from "../API/chats"

function CreateNewChat(props) {
    const { loadChats } = props
    const [newUsername, setNewUsername] = useState('')
    const [newChatText, setNewChatText] = useState('')
    const [chatCreating, setChatCreating] = useState(false)

    
    const createChatAction = async () => {
        setChatCreating(true)
        await createMessage(newUsername, newChatText)
        setChatCreating(false)
        await loadChats()
        setNewUsername('') 
        setNewChatText('')
    }

    return (
        <div>
            <div className="input p-3">
                <label className="form-label" htmlFor="new-user-name"></label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={newUsername}
                    onChange={(event) => setNewUsername(event.target.value)}
                    id="new-user-name"
                />
            </div>
            <div className="form-outline form-white">
                <textarea
                    type="text"
                    className="form-control"
                    value={newChatText}
                    onChange={(event) => setNewChatText(event.target.value)}
                    id="new-chat-text"
                />
                <label className="form-label" htmlFor="new-chat-text">Message</label>
            </div>
            <button 
                className="btn btn-warning btn-lg btn-rounded float-end"
                disabled={chatCreating}
                onClick={createChatAction}
            >
                <FontAwesomeIcon icon={faPaperPlane} />
            </button>
        </div>
    )
}
export default CreateNewChat