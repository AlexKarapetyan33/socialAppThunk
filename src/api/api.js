import axios from "axios"



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0"
})


export const socialApi = {
    async getAllUsers() {
        const response = await instance.get('/users?count=100')
        return response.data.items
    },
    async getProfile(id){
        const response = await instance.get(`/profile/${id}`)
        return response
    }
}