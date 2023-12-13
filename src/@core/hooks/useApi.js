import axios from 'axios'
const client = axios.create({
    baseURL: 'http://localhost:5000'
})
// client.interceptors.request.use(config => {
//     const role = window.localStorage.getItem('role')
//     if(role) {
//         config.headers['Authorization'] = role
//     }
//     else {
//         console.log("Can't get role")
//     }
//     return config
// })

export default client