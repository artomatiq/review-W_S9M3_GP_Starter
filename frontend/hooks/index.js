import { useState, useEffect } from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:9009/acme/auth'

export function useAuth(redirect) {
    const [auth, setAuth] = useState(null)

    const checkAuth = async () => {
        try {
            await axios.get(`${BASE_URL}/is_authed`, {
                headers: {Authorization: localStorage.getItem('token')}
            })
            setAuth(true)
        }
        catch (err) {
            localStorage.removeItem('token')
            setAuth(false)
        }
    }

    useEffect(() => {
        if (auth === false) redirect
    }, [auth])

    useEffect(() => {
        if (!localStorage.getItem('token')) redirect
        else checkAuth()
    }, [])

    return {checkAuth, auth}
}

export function useInput(name, initialValue = '') {
    const [value, setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)
    return {name, value, onChange}
}

