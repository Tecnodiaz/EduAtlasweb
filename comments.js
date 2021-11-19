import axios from 'axios'

const URL = 'http://localhost:3001/comments'

const getComments = async () => {
    const request = axios.get(URL)
    const response = await request
    return response.data
    }
    const exportedMethods = {
        getComments,
        
    }
    export default exportedMethods
