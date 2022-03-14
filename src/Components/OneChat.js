function OneChat(props) {
    const { onechat } = props
    return (
        <div className="d-flex flex-row justify-content-start">
            <div className="d-flex justify-content-between">
                <p className="small mb-1">{onechat.title}</p>
            </div>
            <div>
                <p className="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: "#f5f6f7" }}>{onechat.chat}</p>
            </div>
        </div>
    )
}
export default OneChat