import axios from 'axios'

const URL = 'http://localhost:3001/posts'

const getAllPosts = async () => {
    const request = axios.get(URL)
    const response = await request
    return response.data
    }

    const create = async (data) => {
        const request = axios.post(URL, data)
        const response = await request
        return response.data
    }

    const exportedMethods = {
        getAllPosts,
        create
    }
    export default exportedMethods
        
     