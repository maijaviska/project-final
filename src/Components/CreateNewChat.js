import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

function CreateNewChat() {
    const [newUsername, setUsername] = useState('')
    const [newChatText, setNewChatText] = useState('')

    return (
        <div>
            <div className="input p-3">
                <label className="form-label" htmlFor="new-user-name"></label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={newUsername}
                    onChange={(event) => setUsername(event.target.value)}
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
            <button className="btn btn-warning btn-lg btn-rounded float-end"><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
    )
}
export default CreateNewChat