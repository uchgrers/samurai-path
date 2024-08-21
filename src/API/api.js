import axios from "axios";

const baseRequestParams = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '03e99c53-8c47-44f6-a51e-0425f6b1bb2e'
    }
})

export const usersAPI = {
    getUsers (pageSize = 10, page = 1) {
        return baseRequestParams.get(`users?count=${pageSize}&page=${page}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    follow (id) {
        return baseRequestParams.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollow (id) {
        return baseRequestParams.delete(`follow/${id}`)
            .then(response => response.data)
    }
}

export const profileAPI = {
    setProfileInfo (id) {
        return baseRequestParams.get(`profile/${id ? id : 26894}`)
            .then(response => response.data)
    },
    getStatus (id) {
        return baseRequestParams.get(`profile/status/${id}`)
            .then(response => response.data)
    },
    updateStatus (status) {
        return baseRequestParams.put('profile/status', {status})
            .then(response => response)
    }
}

export const authAPI = {
    me () {
        return baseRequestParams.get('auth/me')
            .then(response => response.data)
    },
    login (email, password, rememberMe) {
        return baseRequestParams.post('auth/login', {email, password, rememberMe})
            .then(response => response.data)
    },
    logout () {
        return baseRequestParams.delete('auth/login')
    },
    getCaptcha () {
        return baseRequestParams.get('security/get-captcha-url')
            .then(response => response.data)
    }
}