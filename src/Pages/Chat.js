import CreateNewChat from "../Components/CreateNewChat"
import Chatlist from "../Components/Chatlist"
import { useEffect, useState } from "react"
import { getChats } from "../API/chats"

function Chat() {
    const [chats, setChats] = useState([])

    const loadChats = async () => {
        const chatsFromBackend = await getChats()
        setChats(chatsFromBackend)
    }

    useEffect(() => {
        loadChats()
    }, [])

    return (
        <div>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center p-3"
                                style={{ borderTop: "4px solid #E5890A" }}>
                                <h5 className="mb-0">Chat messages</h5>
                            </div>
                            <div className="card-body" style={{ position: "relative", minHeight: "300px" }}>
                                <Chatlist chats={chats}/>
                            </div>

                            <div className="card-footer text-muted justify-content-start align-items-center p-3">
                                <ul className="mb-3">
                                    <CreateNewChat loadChats={loadChats}/>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat