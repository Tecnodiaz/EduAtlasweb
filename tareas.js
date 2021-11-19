import axios from 'axios'

const URL = 'http://localhost:3001/tareas'

const getTareas = async () => {
    const request = axios.get(URL)
    const response = await request
    return response.data
    }

    const exportedMethods = {
        getTareas
    }
    export default  exportedMethods