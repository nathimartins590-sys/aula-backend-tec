import api from "./api"

//

//

//

//

//

const loginUser = async (email, password) => {
    const body = { email, password }
    const response = await api.post('/v1/user/login', body, {
        headers: { 'Content-Type': 'application/json' }
    })

    return response.data
}

export default loginUser 