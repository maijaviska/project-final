import OneChat from "./OneChat"

function Chatlist(props) {
    const {chats} = props

    const chatsList = chats.map((onechat, index) => {
        return <OneChat onechat={onechat} key={index} />
    })

    return(
        <div>
            <ul className="list-group">
                {chatsList}
            </ul>

        </div>
    )
}
export default Chatlist