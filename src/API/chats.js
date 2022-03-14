import axios from "axios"

const baseUrl = 'http://localhost:3000/tasks'

export async function getChats() {
    
    const response = await axios.get(baseUrl)
    return response.data
    
}

export async function createMessage(usernameName, chatMessage) {
    const data = {
        title: usernameName,
        message: chatMessage
    }
    await axios.post(baseUrl, data)
}
