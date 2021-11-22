import axios from 'axios'

const URL = 'http://localhost:3001/comments'

const getComments = async () => {
    const request = axios.get(URL)
    const response = await request
    return response.data
    }

    const addComment = async (data) => {
        const request = axios.post(URL,data)
        const response = await request
        return response.data
    }
    const exportedMethods = {
        getComments,
        addComment
        
    }
    export default exportedMethods
