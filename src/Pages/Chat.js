import CreateNewChat from "../Components/CreateNewChat"
import Chatlist from "../Components/Chatlist"
import { useEffect, useState } from "react"
import { getChats } from "../API/chats"

function Chat() {
    const [chats, setChats] = useState([])

    useEffect(() => {
        const chatsFromBackend = getChats()
        setChats(chatsFromBackend)
    }, [])


    return (
        <div>
            <div className="container py-5">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-4">

                        <div className="card">
                            <div className="card-header d-flex justify-content-between align-items-center p-3"
                                style={{ borderTop: "4px solid #ffa900;" }}>
                                <h5 className="mb-0">Chat messages</h5>
                                <div className="d-flex flex-row align-items-center">
                                    {/* <span className="badge bg-warning me-3">20</span> */}

                                </div>
                            </div>
                            <div className="card-body" style={{ position: "relative", height: "400px" }}>
                                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                    <div class="d-flex justify-content-between">
                                        <p class="small mb-1">Johny Bullock</p>
                                    </div>
                                    <p className="small p-2 me-3 mb-3 text-white rounded-3 bg-warning">Thank you for your believe in our
                                        supports</p>

                                </div>
                                <div className="d-flex flex-row justify-content-start">
                                    <div className="d-flex justify-content-between">
                                        <p className="small mb-1">Timona Siera</p>
                                    </div>
                                    <div>
                                        <p className="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>For what reason would it
                                            be advisable for me to think about business content?</p>
                                    </div>
                                </div>
                                <Chatlist chats={chats}/>

                            </div>

                            <div className="card-footer text-muted justify-content-start align-items-center p-3">
                                <ul className="mb-3">
                                    <CreateNewChat />
                                    {/* <div className="input p-3">
                                        <input type="text" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-outline form-white">
                                        <textarea className="form-control" id="textAreaExample3" rows="4"></textarea>
                                        <label className="form-label" for="textAreaExample3">Message</label>
                                    </div>
                                    <button type="button" className="btn btn-warning btn-lg btn-rounded float-end">Send</button> */}
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