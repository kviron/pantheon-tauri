import { $api } from '@/shared/api/api.ts'
import Cookies from 'js-cookie'

export enum ETokens {
    ACCESS_TOKEN = 'access_token',
    REFRESH_TOKEN = 'refresh_token'
}

class AuthService {
    getAccessToken() {
        const accessToken = Cookies.get(ETokens.ACCESS_TOKEN)
        return accessToken || null
    }

    saveAccessToken(token: string) {
        Cookies.set(ETokens.ACCESS_TOKEN, token, {
            domain: 'localhost',
            sameSite: 'strict',
            expires: 1
        })
    }

    removeAccessToken() {
        Cookies.remove(ETokens.ACCESS_TOKEN)
    }

    async main(type: 'login' | 'register', data: any) {
        const response = await $api.post(`/auth/${type}`, data)

        if (response.data.accessToken) this.saveAccessToken(response.data.accessToken)

        return response
    }

    async getNewTokens() {
        const response = await $api.post('/auth/login/access-token')

        if (response.data.accessToken) this.saveAccessToken(response.data.accessToken)

        return response
    }

    async logout() {
        const response = await $api.post<boolean>('/auth/logout')

        if (response.data) this.removeAccessToken()

        return response
    }
}

export const authService = new AuthService()
